import { Router } from "express"
import Herb from "../controllers/herbs.controllers"
import AsyncHandler from "@middlewares/asyncHandler"

const router = Router()

router.get('/', AsyncHandler(Herb.getHerbs))

// router.post('/', AsyncHandler(User.Register))

export default router