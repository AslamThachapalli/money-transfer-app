const zod = require('zod');

const signUpBody = zod.object({
    username: zod.string({ required_error: 'Username is required' })
        .email({ message: 'Invalid email address' })
        .max(30, { message: 'Must be 30 or fewer characters long' }),
    firstname: zod.string({ required_error: 'firstname is required' })
        .max(50, { message: 'Must be 50 or fewer characters long' }),
    lastname: zod.string({ required_error: 'lastname is required' })
        .max(50, { message: 'Must be 50 or fewer characters long' }),
    password: zod.string({ required_error: 'password is required' })
        .min(6, { message: 'Must be 6 or more characters long' }),
})

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

module.exports = { signUpBody , signInBody }