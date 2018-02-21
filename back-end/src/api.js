import { Router } from 'express'
import userRouter from './user/user.router'

const router = Router()

export default router
    .use('/users', userRouter)