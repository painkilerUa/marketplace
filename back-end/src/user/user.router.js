import { Router } from 'express'

import ctrl from './user.controller'

const router = Router()

export default router
    .get('/', ctrl.call('getAll'))