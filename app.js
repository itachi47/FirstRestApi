const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

//IMPORT ROUTES
const postRoute = require('./Routes/postRoute')

//MIDDLEWARES
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/posts', postRoute);


//HOME 
app.get('/', (req, res) => {
    res.send("We are on the home page");
});


//DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology : true}, () => {
    console.log("Connected to DB");
});

//LISTEN TO THE SERVER
app.listen(3000);