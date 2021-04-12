const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please tell us your name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
    },
    photo: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must contain at least 8 character'],
        select: false, // to not showing this param to the client or consumer
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must contain at least 8 character'],
        select: false,
    },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
}, {
    // here the option value
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});



const User = mongoose.model('User', userSchema);

module.exports = User;