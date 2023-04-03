const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Log = require('./models/logSchema.js')
const app = express();
const port = process.env.PORT || 3008
const LogSeed = require('./seed.js')
require("dotenv").config();
const db=mongoose.connection 
const MONGODB_URI=process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)


app.use(cors());
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));

// app.get('/seed', (req, res) => {
//   Log.create(LogSeed).then(log => {
//     res.redirect('/log')
//   })
//   .catch(err => console.log("GET Seed Error: ", err))
// })

app.get('/log', (req, res) => {
  Log.find({}).then((foundLog => {
      res.json(foundLog);
    }))
    .catch(err => console.log("GET Error: ", err));
});

app.post('/log', (req, res) => {
  console.log(req.body)
  // const { city, country, description, travelers, startDate, endDate, image, rating } = req.body;
  // const newLog = new Log({
  //   city,
  //   country,
  //   description,
  //   travelers,
  //   startDate,
  //   endDate,
  //   image,
  //   rating,
  // } = req.body)
Log.create(req.body)
.then(log => {
  res.json(log)
})
.catch(error => console.log("POST Error: ", error))
});

app.put('/log/:id', (req, res) => {
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
res.json(updatedLog)
  })
});

app.put('/log/:id', (req, res) => {
  const { city, country, description, travelers, startDate, endDate, image, rating } = req.body;
  Log.findByIdAndUpdate(req.params.id, {
    city,
    country,
    description,
    travelers,
    startDate,
    endDate,
    image,
    rating,
  }, ((updatedLog).then((log => {
    updatedLog._id = log._id
    res.json(updatedLog)
  })))
  .catch(err => console.log("UPDATE Error: ", err)))
});

app.delete('/log/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.json(deletedLog)
  })
  .catch(err => console.log("DELETE Error: ", err))
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongod...');
// });