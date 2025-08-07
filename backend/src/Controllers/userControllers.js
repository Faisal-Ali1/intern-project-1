const blog = require('../Models/blogSchema');


const getAllBlog = async(req , res) => {
    try{
       const data = await blog.find({});
       res.status(200).send(data);
    }
    catch(err){
        res.status(400).send(`Error: ${err.message}`);
    }
}

module.exports = getAllBlog;