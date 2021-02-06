import 'dotenv/config.js'

import express from 'express'
import userRoutes from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';
import './database/connection.js';

const PORT = process.env.PORT || 3333

const server = express()

server.use(express.json())

server.use('/user', userRoutes)
server.use('/admin', adminRouter)

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})