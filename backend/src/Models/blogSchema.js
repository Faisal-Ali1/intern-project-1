const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 50
    },
    discription: {
        type: String,
    },
    blog_body: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true

    }

})

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;