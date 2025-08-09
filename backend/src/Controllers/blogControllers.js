const blog = require('../Models/blogSchema');
const user = require('../Models/userSchema');


const createBlog = async (req, res) => {
    try {
        if (!req.body?.title)
            return res.status(400).send('blog title is necessary');

        if (!req.body?.blog_body)
            return res.status(400).send('write some blog before submit');

        // console.log(req.result);
        
        const blogData = await blog.create({...req?.body , creator: req?.result?._id});
    // console.log(blogData);
    
        await user.findByIdAndUpdate( req.result._id , {$push: {all_blogs: blogData?._id }})
        res.status(201).send('blog created sucessfully');

    }


    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}

const getAllBlog = async (req, res) => {
    try {
        const data = await blog.find({});
        res.status(200).send(data);
    }
    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}

module.exports = { createBlog , getAllBlog};