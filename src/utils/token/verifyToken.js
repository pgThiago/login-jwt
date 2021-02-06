import jwt from 'jsonwebtoken'

const secretKey = process.env.TOKEN_SECRET

export function verifyToken(token){
    const isTokenValid = jwt.verify(token, secretKey)
    return isTokenValid
}