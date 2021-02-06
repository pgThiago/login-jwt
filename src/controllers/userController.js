import User from '../models/User.js'

import { encryptPassword } from '../utils/crypt/encryptPassword.js'
import { comparePassword } from '../utils/crypt/comparePassword.js'

import { registerValidate } from './validateData.js'
import { loginValidate } from './validateData.js'

import { generateToken } from '../utils/token/generateToken.js'

export const userController = {
    login: async (request, response) => {
        const { error } = loginValidate(request.body)
        if(error) return response.status(400).send(error)

        const { email, password } = request.body
        const userExists = await User.findOne({ email })
        if(!userExists) return response.status(400).send(`Email or Password is incorrect.`)

        const userCanAccess = comparePassword(password, userExists.password)
        if(!userCanAccess) return response.status(400).send(`Email or Password is incorrect.`)

        const token = generateToken({ _id: userExists._id, admin: userExists.admin })
        response.header('authorization-token', token)
        
        return response.status(200).send({ message: `Logged in successfully.`})
    },

    register: async (request, response) => {
        const { error } = registerValidate(request.body)
        if(error) return response.status(400).send(error)

        const { name, email, password } = request.body
        
        const userExists = await User.findOne({ email })
        if(userExists) return response.status(400).send(`User already exists.`)
        
        const securePassword = encryptPassword(password)        
        const user = new User({
            name, 
            email, 
            password: securePassword
        })
        
        try {
            const savedUser = await user.save()
            response.status(201).send(savedUser)
        } catch (error) {
            response.status(400).send(`Error: ${error}`)
        }
    }
}