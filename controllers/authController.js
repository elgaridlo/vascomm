const User = require('../models/usersModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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

exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;

    // 1) Check if email and password exists
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }
    console.log('email = ', req.body)
        // 2) Check if email and password is correct
    const user = await User.findOne({ email }).select('+password');
    if (!user || (user.password != password)) {
        // 401 means unauthorize
        return next(new AppError('Incorrect email or password!', 401));
    }
    console.log('user = ', user);

    // 3) If everything ok, send back to the client
    res.status(200).json({
        status: 'Success',
        data: {
            user,
        },
    });
});