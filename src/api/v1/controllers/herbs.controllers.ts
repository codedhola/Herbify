import { Request, Response, NextFunction } from "express";
import { Herb } from "@/db/models/herbs.model";
import { herbDTO } from "@utils/dtos";
import { validate } from "class-validator";
import ResponseCall from "@utils/Response";
import AppError from "@middlewares/errorHandler";

export default class HerbController {
    static async getHerbs(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const data = await Herb.findAll();

        return ResponseCall.success(res, data);
    }

    static async Create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        const createUserDTO = new herbDTO();

        createUserDTO.description = req.body.description;
        createUserDTO.name = req.body.name;
        createUserDTO.effect = req.body.effect;
        createUserDTO.categoryID = req.body.categoryID;
        createUserDTO.botanicalName = req.body.botanicalName;
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

        const user = await Herb.create(req.body);
        return ResponseCall.success(res, user, 201);
    }
}
