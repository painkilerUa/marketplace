import { Router } from 'express'

import ctrl from './user.controller'

const router = new Router()

export default router
    .get('/', ctrl.call('getAll'))