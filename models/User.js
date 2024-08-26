const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
}, {timestamps:true})
//collection name Users
module.exports = mongoose.model('Users', userSchema)