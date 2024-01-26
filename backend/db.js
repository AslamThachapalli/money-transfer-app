const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = require('zod');

mongoose.connect('mongodb+srv://aslamdevelop:Ass5Mongo@cluster0.vryu7ml.mongodb.net/');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
})

userSchema.methods.createHash = async (password) => {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);

    // Or we can create salt and hash in a single method also
    // return await bcrypt.hash(plainTextPassword, saltRounds);
}

userSchema.methods.compareHash = async (passwordToCompare, password) => {
    return await bcrypt.compare(passwordToCompare, password);
}

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('/PaytmUser', userSchema);
const Account = mongoose.model('/accounts', accountSchema);

module.exports = { User, Account }