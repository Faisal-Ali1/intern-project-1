const express = require('express');
const main = require('./config/db')
const authRouter = require('./Routes/authRoute');
const userRouter = require('./Routes/userRoute')
const cookieParser = require('cookie-parser')
require('dotenv').config({quiet: true});
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth' , authRouter);
app.use('/user' , userRouter);


async function initialConnection() {

    try {
        await main();
        console.log('connected to db');


        app.listen(PORT, () => {
            console.log(`listning at port no: ${PORT}`);

        });
    }
    catch (err) {
        console.log('Error: ', err.message);

    }

}

initialConnection();

