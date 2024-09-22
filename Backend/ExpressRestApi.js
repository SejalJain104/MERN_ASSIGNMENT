const express = require("express");
const axios = require('axios');
const {connectToMongoDb} = require('./connection')
const userRoutes = require('./routes/User');
const blogRoutes = require('./routes/Blogs');
require('dotenv').config();

const app = express();

app.use(express.json());

// Middleware to parse URL-encoded form data (if needed)
app.use(express.urlencoded({ extended: true }));

connectToMongoDb(process.env.MONGO_URI)
.then(() => {
    console.log("Mongodb Connected");

    //listen for requests
    app.listen(process.env.PORT,() => {
        console.log('Listening on Port 3000')
    });
})
.catch(error => console.error("Unable to connect to MongoDB",error));


app.get('/api/dummyusers',async (req,res) => {
 try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users =  response.data;
    console.log(users);
    res.json(users);
 }
 catch(error){
  console.log(error);
  res.status(500).json({error: 'Unable to fetch users'});
 }
});

// Routes
app.use('/api',userRoutes);
app.use('/api',blogRoutes)