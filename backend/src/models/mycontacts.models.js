const mongoose = require('mongoose');


const myContactSchema = new mongoose.Schema({
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }

});


const Mycontact = mongoose.model('MyContact',myContactSchema);

module.exports = {Mycontact};