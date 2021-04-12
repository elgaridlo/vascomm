const express = require('express')

const userRoute = require('./routers/userRoute')

const app = express()


app.use(express.json());

app.use('/api/users/', userRoute);

module.exports = app;