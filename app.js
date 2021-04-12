const express = require('express')

const userRoute = require('./routers/userRoute')
const errorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express()


app.use(express.json());

app.use('/api/users/', userRoute);

app.all('*', (req, res, next) => {
    next(
        new AppError(`Cannot find this url ${req.originalUrl} on this server!`, 404)
    );
});

app.use(errorHandler);

module.exports = app;