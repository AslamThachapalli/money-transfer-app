const { Router } = require('express');
const { signUpBody, signInBody, updateBody } = require('../validations/user');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.put('/', authMiddleware, async (req, res) => {
    const password = req.body.password;
    const parsedBody = updateBody.safeParse(req.body);

    if (!parsedBody.success) {
        return res.status(411).json({
            message: parsedBody.error.errors[0].message,
        })
    }

    const user = await User.findById(req.userId).exec();

    if (password) {
        const hashPassword = await user.createHash(password);
        req.body.password = hashPassword;
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: 'Updated successfully'
    })
})

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
    await Account.create({
        userId: user._id,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({ userId: user._id }, JWT_SECRET)

    res.status(201).json({
        message: 'User created successfully',
        token
    })
})

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let { success } = signInBody.safeParse(req.body);

    if (!success) {
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
            return res.status(200).json({
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                token
            })
        } else {
            return res.status(400).json({
                message: 'Invalid Credentials'
            })
        }
    }

})

router.get('/bulk', authMiddleware, (req, res) => {
    const name = req.query.filter;

    User.find().or([{ firstname: { $regex: name } }, { lastname: { $regex: name } }])
        .select('firstname lastname _id')
        .then(users => {
            const filteredUsers = users.filter(user => user._id != req.userId);

            res.json({ users: filteredUsers })
        }).catch(err => res.status(411).json({
            message: 'Some unexpected error occurred'
        }))
})

module.exports = router