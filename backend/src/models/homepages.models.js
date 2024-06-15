const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    introduction:{
        type:String,
        required:true,
    },
    icons_work:[
        {
            type:String, //we will store url obtained from the cloudinary
            required:true,

        }
    ],

    profile_img:{
        type:String,  //we will store url obtained from the cloudinary
        required:true,
    }

},{timestamps:true})


const Home = mongoose.model('Home',homeSchema);
module.exports = {Home}
