import express, {Request, Response, NextFunction} from 'express'


const app = express()

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

const PORT: number = Number(process.env.PORT) || 4001

app.listen(PORT, () => {
    console.log(`App running... App instance on port ${PORT}`)
})