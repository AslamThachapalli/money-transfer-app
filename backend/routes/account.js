const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { Account, mongoose } = require('../db');
const transferBody = require('../validations/account');

const router = Router();

router.get('/balance', authMiddleware, async (req, res) => {
    const { balance } = await Account.findOne({ userId: req.userId });

    res.json({ balance })
})

router.post('/transfer', authMiddleware, async (req, res) => {
    const {success} = transferBody.safeParse(req.body);

    if(!success){
        return res.status(401).json({
            message: 'Invalid inputs'
        })
    }

    const {to, amount} = req.body;
    const from = req.userId;

    let session = null;

    mongoose.startSession()
    .then(_session => {
        session = _session;
        session.startTransaction();
        return Account.findOne({userId: from}).session(session);
    })
    .then(account => {
        if(!account || account.balance < amount){
            session.abortTransaction();
            throw new Error('Insufficient Balance')
        }
    })
    .then(() => Account.findOne({userId: to}).session(session))
    .then(toAccount => {
        if(!toAccount){
            session.abortTransaction();
            throw new Error('Invalid Account')
        }
    })
    .then(() => Account.updateOne({userId: from}, { $inc: {balance: -amount}}).session(session))
    .then(() => Account.updateOne({userId: to}, { $inc: {balance: amount}}).session(session))
    .then(() => session.commitTransaction())
    .then(() => session.endSession())
    .then(() => res.json({
        message: 'Transaction successful'
    }))
    .catch(error => {
        res.status(400).json({
            message: error.message
        })
    })
})

module.exports = router;