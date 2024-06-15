const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    blog_img:{
        type:String,   //url will be obtained from the cloudinary
        required:true
    },
    description:{
        type:String,
        required:true
    }

},{timestamps:true});



const Blog = mongoose.model('Blog',blogSchema);
module.exports ={Blog};
