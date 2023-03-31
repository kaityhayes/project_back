//Dependencies
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
// const cors = require('cors');
require('dotenv').config();
const City = require('./models/cities.js')
const cors = require('cors')

//Port
const PORT = process.env.PORT
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to Mongo &
mongoose.connect(MONGODB_URI)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('cors'())




// Routes
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

app.post('/cities', (req, res) => {
  console.log(req.body);
 City.create(req.body).then((createdCity) => {
  res.json(createdCity)
 })
    .catch(err => console.log('POST / ERROR:', err))
});


app.get('/cities', (req, res) => {
  City.find({}).then((foundCity) => {
    res.json(foundCity)
  })
  .catch(err => console.log('FIND / ERROR:', err))
});

// DELETE 
app.delete('cities/:id', (req, res) => {
  City.findByIdAndRemove({ _id: req.params.id })
    .then(deletedCity => {
      res.json(deletedCity);
    })
    .catch(err => console.log('DELETE /:id ERROR:', err));
});


// app.get('/:id', (req, res) => {
//   City.findById(req.params.id)
//     .then(cities => {
//       res.json(cities);
//     })
//     .catch(err => console.log('GET / :id ERROR:', err));
// });

// UPDATE
app.put('cities/:id', (req, res) => {
  City.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedCity) => {
    res.json(updatedCity)
  })
    .catch(err => console.log('PUT / :id ERROR:', err));
});




export default app