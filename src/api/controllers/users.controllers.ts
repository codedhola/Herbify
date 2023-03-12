import { Request, Response, NextFunction} from 'express'

export default class User {

    static async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response> {
        return res.status(200).json({
            status: "Successful"
        })
    }
}
