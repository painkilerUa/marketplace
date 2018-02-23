import { Router } from 'express'
import userRouter from './user/user.router'
import authRouter from './auth/auth.router'

const router = new Router()

router
    .use('/users', userRouter)
    .use('/login', authRouter)

export default router