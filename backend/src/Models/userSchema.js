const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        minlength:2,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required: true,

    },
    all_blogs:[
        {
            type:Schema.Types.ObjectId,
            ref:'blog'
        }
    ]
})

const user = mongoose.model('user' , userSchema);

module.exports = user;