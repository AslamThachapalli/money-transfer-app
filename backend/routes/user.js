const { Router } = require('express');
const {signUpBody, signInBody} = require('../validations/user');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const router = Router();


router.post('/signup', async (req, res) => {
    const reqBody = req.body;
    const password = reqBody.password;

    const parsedBody = signUpBody.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(400).json({
            message: parsedBody.error.errors[0].message
        })
        return;
    }

    const newUser = new User({
        username: reqBody.username,
        firstname: reqBody.firstname,
        lastname: reqBody.lastname,
    })

    let hashPassword = await newUser.createHash(password);
    newUser.password = hashPassword;

    let existingUser = await User.findOne({ username: reqBody.username })

    if (existingUser) {
        res.status(411).json({
            message: "Email already taken / Incorrect inputs",
        })
        return;
    }

    const user = await newUser.save();
    const token = jwt.sign({ userId: user._id }, JWT_SECRET)

    res.status(201).json({
        message: 'User created successfully',
        token
    })
})

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let {success} = signInBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({
            message: 'Invalid inputs'
        })
    }

    let user = await User.findOne({ username: username })

    if (user == null) {
        return res.status(400).json({
            message: 'User not found'
        })
    } else {
        if (await user.compareHash(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, JWT_SECRET);
            return res.status(200).json({ token })
        }else{
            return res.status(400).json({
                message: 'Invalid Credentials'
            })
        }
    }

})

router.post('/update-info', (req, res) => {

})

module.exports = router