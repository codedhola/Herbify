import { Request, Response, NextFunction } from "express"
import { errorLogs, logger } from "@middlewares/logger"
import { NODE_ENV } from "@env"
import AppError from "@middlewares/errorHandler"
// import { errorPayload } from "@interfaces/errorPayload"

// PRODUCTIONAL ERRORS
function prodError(err: any, res: Response){
     // A) Operational Error
    if (err.isOperational) {
        errorLogs.error('ERROR 💥', JSON.stringify(err))
        return res.status(err.statusCode).json({
          status: err.status,
          message: err.message
        });
      }
      
      // B) NON-Operational Error
      errorLogs.error('ERROR 💥', err)

      return res.status(500).json({
        status: 'error',
        message: 'Something went wrong!, We will get back to you on this',
        err
      });
}

// DEVELOPMENT ERROR STACK
function devError(err: any, res: Response){
    return res.status(err.statusCode).json({
        status: err.status,  
        error: err,
        message: err.message,
        stack: err.stack
      })
}

function SequelizUniqueConstraint(err: any){
  const path = err[0].path
  const value = err[0].value
  const message = `${path}: ${value} has already been used, please try another`
  return new AppError(message, 400)
}

function handleUUIDError(err: any){
  const parameter = err.parameters[2]
  const message = `Invalid parameter: ${parameter} provided`
  return new AppError(message, 400)
}

function SequelizeValidationHandler(err: any){
  const message = err[0].message
  return new AppError(message, 400)
}

function handleNetworkError(err: any){
  return new AppError("Your Network is not stable, Request has timed out Please try again later", 408)
}

function handleJwtExpires(){
  return new AppError("Your session has expired, please login", 401)
}

export default (err: any, req: Request, res: Response, next: NextFunction) => {
        err.statusCode = err.statusCode || 500
        err.status = err.status || "error"
        if(NODE_ENV === "development"){
            devError(err, res)
        }else{
           let error = {...err}
             if(err.name === "SequelizeUniqueConstraintError"){
                err = SequelizUniqueConstraint(err.errors) }
             if(err.name === "SequelizeDatabaseError" && err.parent.code === "22P02"){
                err = handleUUIDError(err.parent) }
             if(err.name === "SequelizeValidationError"){
                err = SequelizeValidationHandler(err.errors)
             }
             if(err.code === "EDNS") {
                err = handleNetworkError(err) }
            //  if(error.errors) { error = handleValidationError(error) }
            //  if(error.name === "JsonWebTokenError") error = handleJwtError()
             if(err.name === "TokenExpiredError"){ 
                err = handleJwtExpires() }

            prodError(err, res)
        }
         

}