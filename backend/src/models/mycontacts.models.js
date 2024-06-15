const mongoose = require('mongoose');


const myContactSchema = new mongoose.Schema({
    phone:{
        type: string,
        required: true
    },
    address:{
        type: string,
        required: true
    },
    email:{
        type: string,
        required: true
    }

});


const Mycontact = mongoose.model('MyContact',myContactSchema);

module.exports = {Mycontact};