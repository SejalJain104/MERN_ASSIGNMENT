const mongoose = require('mongoose');
const User = require('./model/User')

const insertUser = async () => {
    try{
        const newUser = await User.create({
            name: 'Sejal Jain',
            email: 'sejaljain9693@gmail.com',
            age: 23
        });
        console.log('User Saved',newUser);

        mongoose.connection.close();
    }
    catch(error){
        console.error('Error inserting user',error.message)
    }
}