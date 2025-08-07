const express = require('express');
const blog = require('../Models/blogSchema');
const user_auth = require('../Middleware/userAuthentication');
const getAllBlog = require('../Controllers/userControllers');
const auth_user = require('../Middleware/userAuthentication');

const userRouter = express.Router();

userRouter.post('/createblog',user_auth, async (req, res) => {
    try {
        if (!req.body?.title)
            return res.status(400).send('blog title is necessary');

        if (!req.body?.blog_body)
            return res.status(400).send('write some blog before submit');

        console.log(req.result);
        
        await blog.create({...req?.body , creator: req?.result?._id});
        res.status(201).send('blog created sucessfully');

    }


    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
})

userRouter.get('/getallblogs' ,auth_user, getAllBlog);

module.exports = userRouter;
