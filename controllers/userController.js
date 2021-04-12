const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/usersModel')


exports.getAll = catchAsync(async(req, res, next) => {
    const feature = await User.find()

    // SEND RESPONSE
    res.status(200).json({
        status: 'Success',
        result: feature.length,
        data: {
            data: feature,
        },
    });
})