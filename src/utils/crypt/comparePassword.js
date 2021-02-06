import bcrypt from 'bcryptjs'

export function comparePassword(textPassword, savedPassword){
    return bcrypt.compareSync(textPassword, savedPassword)
}