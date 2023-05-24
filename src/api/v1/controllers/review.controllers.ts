import { Request, Response, NextFunction} from 'express'
import { Review } from '@/db/models/reviews.model'
import { ReviewDTO } from '@utils/dtos'
import { validate } from 'class-validator'
import ResponseCall from '@utils/Response'
import AppError from '@middlewares/errorHandler'

export default class ReviewController {

    static async getReview(req: Request, res: Response, next: NextFunction): Promise<Response> {

        const data = await Review.findAll()

        return ResponseCall.success(res, data)
    }

    static async Create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const createUserDTO = new ReviewDTO()

        createUserDTO.comment = req.body.comment
        createUserDTO.rating = req.body.rating
        createUserDTO.userID = req.body.userID
        createUserDTO.herbID = req.body.herbID 

        const errors = await validate(createUserDTO);
        if (errors.length > 0) {
        const constraints: any = {};
        errors.forEach(error => {
          const propertyName = error.property;
          const errorConstraints = Object.values(error.constraints!);
          constraints[propertyName] = errorConstraints;
        });


        // USE CUSTOM RESPONSE NOT ERROR MIDDLEWARE
        return next(new AppError(JSON.stringify(constraints), 400))
        
      }
        
        const user = await Review.create(req.body)
        return ResponseCall.success(res, user, 201)
    }
}
    