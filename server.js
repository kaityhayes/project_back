const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Log = require('./models/logSchema.js')
const app = express();
const port = process.env.PORT || 3008
// const Log = './models/logSchema.js'

app.use(cors());
app.use(express.json())


app.get('/seed', (req, res) => {
  Log.create(LogSeed).then(log => {
    res.redirect('/')
  })
  .catch(err => console.log("GET Seed Error: ", err))
})

app.get('/', (req, res) => {
  Log.find({}, (err, foundLog) => {
    res.json(foundLog)
  })
    .catch(err => console.log("GET Error: ", err))
});

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

app.put('/:id', (req, res) => {
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
res.json(updatedLog)
  })
});

app.put('/:id', (req, res) => {
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

app.delete('/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.json(deletedLog)
  })
  .catch(err => console.log("DELETE Error: ", err))
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/travelLog')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});