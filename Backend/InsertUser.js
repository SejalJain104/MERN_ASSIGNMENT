const mongoose = require('mongoose');
const User = require('./model/User')


//Script to insert a new user
const insertUser = async () => {
    try{
        const newUser = await User.create({
            name: 'Sejal Jain',
            email: 'sejaljain9693@gmail.com',
            age: 23
        });
        console.log('User Saved',newUser);

        // Close the MongoDB connection 
        mongoose.connection.close();
    }
    catch(error){
        console.error('Error inserting user',error.message)
    }
}