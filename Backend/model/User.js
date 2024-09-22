const mongoose = require('mongoose');

//Define the schema for User

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowecase: true,
        match:[/.+\@.+\..+/,'Please enter a valid email']
    },
    age:{
        type: Number,
        required: true,
        min:1
    }
},{
    timestamps: true
});

//Create a User model
const User = mongoose.model('User',userSchema);

module.exports = User;