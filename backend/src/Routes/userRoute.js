const express = require('express');
const {registerUser, loginUser, updateUserProfile, logoutUser, deleteUser} = require('../Controllers/userControllers');
const user_auth = require('../Middleware/userAuthentication');

const userRouter = express.Router();


userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.patch('/updateprofile' , user_auth, updateUserProfile);
userRouter.get('/logout' , user_auth, logoutUser);
userRouter.delete('/delete' , user_auth, deleteUser );






module.exports = userRouter;