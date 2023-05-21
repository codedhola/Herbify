import { Router } from "express"
import User from '@controllers/users.controllers'

const router = Router()

router.get('/', User.getUsers)

export default router