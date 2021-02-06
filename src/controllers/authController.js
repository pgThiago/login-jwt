import { verifyToken } from '../utils/token/verifyToken.js'

export function isAuthorized(request, response, next){
    const token = request.header('authorization-token')
    if(!token) return response.status(401).send('Access denied.')

    try {
        const userVerified = verifyToken(token)
        
        request.user = userVerified
        next()
    } catch (error) {
        return response.status(401).send('Access denied.')
    }
}

export function isAdmin(request, response){
    if(request.user.admin) 
        return response.status(200).send('Only admin can read this message.')
    else 
        return response.status(401).send('Access denied.')
}