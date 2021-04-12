const mongoose = require('mongoose');


const app = require('./app');

const DB = `mongodb://localhost:27017/vascomm_account`;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connection Successfull'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server running on port ${port}...`);
});