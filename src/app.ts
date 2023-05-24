import express, {Request, Response, NextFunction, Application} from 'express'
import userRoute from '@routes/users.routes'
import herbRoute from '@routes/herbs.routes'
import reviewRoute from '@routes/review.routes'
import AppError from '@middlewares/errorHandler'
import errorServices from '@services/errorServices'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/v1/users', userRoute)
app.use('/api/v1/herbs', herbRoute)
app.use('/api/v1/reviews', reviewRoute)

app.get("/", async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try{
        return res.json({
            "Status": "Success",
            "Response": "Welcome"
        })
    }catch(err){
        return res.json({
            "Status": "Failed",
            "Response": "error"
        })
    }  
})

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    return next(new AppError("Route Not found", 404))
})

app.use(errorServices)


export { app }