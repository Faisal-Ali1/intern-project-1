const blog = require('../Models/blogSchema');
const user = require('../Models/userSchema');


const createBlog = async (req, res) => {
    try {
        if (!req.body?.title)
            return res.status(400).send('blog title is necessary');

        if (!req.body?.blog_body)
            return res.status(400).send('write some blog before submit');

        // console.log(req.result);

        const blogData = await blog.create({ ...req?.body, creator: req?.result?._id });
        // console.log(blogData);

        await user.findByIdAndUpdate(req.result._id, { $push: { all_blogs: blogData?._id } })
        res.status(201).send('blog created sucessfully');

    }


    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}
const getAllBlog = async (req, res) => {
    try {

        const page = req.query.page;
        const limit = 10
        
        // fetching data in set of 10
        const data = await blog.find({}).skip((page-1)* limit).limit(limit);
        res.status(200).send(data);
    }
    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}
const getLatestBlog = async (req , res) => {
    try{
        const latestBlog = await blog.find({}).limit(10);
        res.status(200).send(latestBlog);
    }
    catch(err){
        res.status(400).send(`Error: ${err.message}`)
    }
}

const getBlogById = async (req, res) => {
    try {

        const { id } = req?.params;

        const blogData = await blog.findById(id);

        if (!blogData)
            return res.status(404).send('blog not found');

        res.status(200).send(blogData)
    }
    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}
const updateBlog = async (req, res) => {
    try {

        if (!req?.params?.id)
            return res.status(400).send('id is missing');


        const { id } = req?.params;

        if (!req.body) {
            return res.status(400).send('enter data for updation');
        }

        // these mandatoryfileds can be update only
        const mandatoryfileds = ['title', 'discription', 'blog_body']

        // checking updation data is present in mandatoryfileds array or not
        const isAvail = Object.keys(req?.body).every(item => mandatoryfileds.includes(item));

        if (!isAvail)
            return res.status(400).send('field not available');

        // updationg blog
        const blogData = await blog.findByIdAndUpdate(id, { ...req?.body });

        res.status(200).json({
            message: 'blog has updated sucessfully',
            blogData
        });

    }
    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}
const deleteblog = async (req, res) => {
    try {
        if (!req?.params?.id)
            return res.status(400).send("Blog_id is missing");

        const { id } = req?.params;

        await blog.findByIdAndDelete(id);

        res.status(200).send('blog deleted sucessfully');
    }
    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}

module.exports = { createBlog, getAllBlog, getLatestBlog, getBlogById, updateBlog, deleteblog };