const express = require('express');
const blog = require('../Models/blogSchema');
const user_auth = require('../Middleware/userAuthentication');
const {createBlog , getAllBlog} = require('../Controllers/blogControllers');
const auth_user = require('../Middleware/userAuthentication');


const blogRouter = express.Router();

blogRouter.post('/createblog',user_auth, createBlog)

blogRouter.get('/getallblogs' ,auth_user, getAllBlog);
// blogRouter.patch('/updateblog' ,auth_user, updateBlog);
// blogRouter.delete('/deleteblog' ,auth_user, deleteblog);

module.exports = blogRouter;
