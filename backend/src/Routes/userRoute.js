const express = require('express');
const {registerUser, loginUser, updateUserProfile, logoutUser, deleteUser, userCheck} = require('../Controllers/userControllers');
const user_auth = require('../Middleware/userAuthentication');
const user_validate = require('../Middleware/userValidation');

const userRouter = express.Router();

userRouter.post('/register',user_validate, registerUser);
userRouter.post('/login',user_validate, loginUser);
userRouter.patch('/updateprofile' , user_auth, updateUserProfile);
userRouter.get('/logout' , user_auth, logoutUser);
userRouter.delete('/delete' , user_auth, deleteUser );
userRouter.get('/check' ,user_auth , userCheck)






module.exports = userRouter;