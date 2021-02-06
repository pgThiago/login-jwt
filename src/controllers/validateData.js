import Joi from 'joi'

export const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(5).max(50),
        password: Joi.string().required().min(6).max(50)
    })

    return schema.validate(data)
}

export const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(50)
    })

    return schema.validate(data)
}