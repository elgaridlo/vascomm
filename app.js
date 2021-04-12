const express = require('express')

const userRoute = require('./routers/userRoute')
const errorHandler = require('./controllers/errorController');
const app = express()


app.use(express.json());

app.use('/api/users/', userRoute);

app.use(errorHandler);

module.exports = app;