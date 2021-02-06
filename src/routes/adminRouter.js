import express from 'express'
import { isAdmin } from '../controllers/authController.js'
import { isAuthorized } from '../controllers/authController.js'

const routes = express.Router()

routes.get('/', isAuthorized, isAdmin)

export default routes