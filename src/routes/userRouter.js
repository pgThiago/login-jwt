import express from 'express'
import { userController } from '../controllers/userController.js'

const routes = express.Router()

routes.post('/register', userController.register)
routes.post('/login', userController.login)

export default routes