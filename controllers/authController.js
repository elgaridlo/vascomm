const User = require('../models/usersModel');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
        role: req.body.role,
    });

    newUser.password = undefined;

    res.status(201).json({
        status: 'Success',
        data: {
            newUser,
        },
    });
})