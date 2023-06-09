import { Request, Response, NextFunction } from "express";
import { User } from "@/db/models/users.model";
import { UserDTO } from "@utils/dtos";
import { validate } from "class-validator";
import ResponseCall from "@utils/Response";
import AppError from "../middlewares/errorHandler";

export default class UserController {
    static async getUsers(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const data = await User.findAll();

        return ResponseCall.success(res, data);
    }

    static async Register(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        const createUserDTO = new UserDTO();

        createUserDTO.email = req.body.email;
        createUserDTO.name = req.body.name;
        createUserDTO.password = req.body.password;
        const errors = await validate(createUserDTO);
        if (errors.length > 0) {
            const constraints: any = {};
            errors.forEach((error) => {
                const propertyName = error.property;
                const errorConstraints = Object.values(error.constraints!);
                constraints[propertyName] = errorConstraints;
            });

            // USE CUSTOM RESPONSE NOT ERROR MIDDLEWARE
            return next(new AppError(JSON.stringify(constraints), 400));
        }

        const user = await User.create(req.body);
        return ResponseCall.success(res, user, 201);
    }
}
