import jwt from 'jsonwebtoken'

const secretKey = process.env.TOKEN_SECRET

export function generateToken(params = {}){
    const token = jwt.sign(params, secretKey, { expiresIn: 86400 })
    return token
}