import express, {Request, Response, NextFunction, Application} from 'express'
import { sequelize } from './db/index'

const app: Application = express()

app.use(express.json())

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

async function serverInit(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
serverInit()

const PORT: number = Number(process.env.PORT) || 4001

app.listen(PORT, () => {
    console.log(`App running... App instance on port ${PORT}`)
})