//Dependencies
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
// const cors = require('cors');
require('dotenv').config();
const Cities = require('./models/cities.js')


//Port
const PORT = process.env.PORT
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to Mongo &
mongoose.connect(MONGODB_URI)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

app.get('/cities', (req, res) => {
  Cities.find({}).then((foundCities) => {
    res.json(foundCities)
  })
});



//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));









