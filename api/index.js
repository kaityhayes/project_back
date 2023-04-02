const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('/localhost:3008', {
  useNewUrlParser: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))


const Log = require('./models/logSchema')

app.post('/', (req, res) => {
  console.log(req.body)
  const { city, country, date, description, image, latitude, longitude, rating } = req.body;
  const newLog = new Log({
    city,
    country,
    date,
    description,
    image,
    rating,
  } = req.body)
Log.create({ city, country, date, description, image, rating })
.then(log => {
  res.json(log)
})
.catch(error => console.log("POST Error: ", error))
});


app.get('/', (req, res) => {
  Log.find({}, (err, foundLog) => {
    res.json(foundLog)
  })
    .catch(err => console.log("GET Error: ", err))
});



  app.put('/logs/:id', (req, res) => {
    const { city, country, date, description, image, latitude, longitude, rating } = req.body;
    Log.findByIdAndUpdate(req.params.id, {
      city,
      country,
      date,
      description,
      image,
      latitude,
      longitude,
      rating
    }, ((updatedLog).then(log => {
      updatedLog._id = log._id
      res.json(updatedLog)
    }))
    .catch(err => console.log("UPDATE Error: ", err)))
  });


  app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id)
      .then(() => {
       res.json(log)
      })
      .catch(err => console.log("DELETE Error: ", err))
    });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app

