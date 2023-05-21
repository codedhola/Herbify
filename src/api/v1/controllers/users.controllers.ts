import { Request, Response, NextFunction} from 'express'
import { User } from '@/db/models/users.model'

export default class UserController {

    static async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response> {

        const user = await User.findAll()
        return res.status(200).json({
            status: "Successful",
            user
        })
    }

    static async Register(req: Request, res: Response, next: NextFunction): Promise<Response> {

        const user = await User.create(req.body)
        return res.status(200).json({
            status: "Successful",
            user
        })
    }
}
    