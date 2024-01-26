const zod = require('zod');

const signUpBody = zod.object({
    username: zod.string({ required_error: 'Username is required' })
        .email({ message: 'Invalid email address' })
        .max(30, { message: 'username must be 30 or fewer characters long' }),
    firstname: zod.string({ required_error: 'firstname is required' })
        .max(50, { message: 'firstname must be 50 or fewer characters long' }),
    lastname: zod.string({ required_error: 'lastname is required' })
        .max(50, { message: 'lastname must be 50 or fewer characters long' }),
    password: zod.string({ required_error: 'password is required' })
        .min(6, { message: 'password must be 6 or more characters long' }),
})

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

const updateBody = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.optional(zod.string().min(6, { message: 'password must be 6 or more characters long' }))
})

module.exports = { signUpBody , signInBody , updateBody}