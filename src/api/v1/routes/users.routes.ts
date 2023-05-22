import { Router } from "express"
import User from '@controllers/users.controllers'
import AsyncHandler from "@middlewares/asyncHandler"

const router = Router()

router.get('/', AsyncHandler(User.getUsers))

router.post('/', AsyncHandler(User.Register))

export default router