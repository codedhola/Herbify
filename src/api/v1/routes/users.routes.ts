import { Router } from "express"
import User from '@controllers/users.controllers'

const router = Router()

router.get('/', User.getUsers)

router.post('/', User.Register)

export default router