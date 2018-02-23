import { Router } from 'express'

import ctrl from './auth.controller'

const router = new Router()

export default router
  .post('/', ctrl.call('login'))