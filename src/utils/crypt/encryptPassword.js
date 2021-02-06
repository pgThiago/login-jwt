import bcrypt from 'bcryptjs'

export function encryptPassword(textPassword) {
    const salt = bcrypt.genSaltSync(14)
    return bcrypt.hashSync(textPassword, salt)
}