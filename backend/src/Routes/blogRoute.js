const express = require('express');
const user_auth = require('../Middleware/userAuthentication');
const {createBlog , getAllBlog, getBlogById, updateBlog, deleteblog} = require('../Controllers/blogControllers');
const auth_user = require('../Middleware/userAuthentication');


const blogRouter = express.Router();

blogRouter.post('/createblog',user_auth, createBlog)
blogRouter.get('/getallblogs' , getAllBlog);
blogRouter.get('/getblog/:id' , auth_user, getBlogById)
blogRouter.patch('/updateblog/:id' ,auth_user, updateBlog);
blogRouter.delete('/deleteblog/:id' ,auth_user, deleteblog);



module.exports = blogRouter;
