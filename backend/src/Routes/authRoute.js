const express = require('express');
const {registerUser , loginUser} = require('../Controllers/authControllers');

const authRouter = express.Router();


authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);



module.exports = authRouter;