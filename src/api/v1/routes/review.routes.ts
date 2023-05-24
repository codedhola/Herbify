import { Router } from "express"
import Review from "../controllers/review.controllers"
import AsyncHandler from "@middlewares/asyncHandler"

const router = Router()

router.get('/', AsyncHandler(Review.getReview))

// router.post('/', AsyncHandler(User.Register))

export default router