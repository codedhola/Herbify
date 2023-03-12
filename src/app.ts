import express, {Request, Response, NextFunction, Application} from 'express'
import userRoute from './api/routes/users.routes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/v1', userRoute)

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

export { app }

// (async () => {
//     try {
//       await sequelize.sync(
//         { force: false } //Reset db every time
//       );
//       const PORT: number = Number(process.env.PORT) || 4001
      
//       app.listen(PORT, () => {
//           console.log(`App running... App instance on port ${PORT}`)
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   })()
