const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Log = require('./models/logSchema.js')
const app = express();
const port = process.env.PORT || 3008
// const Log = './models/logSchema.js'

app.use(cors());
app.use(express.json())

// app.get('/seed', (req, res) => {
//   Log.create(LogSeed).then(log => {
//     res.redirect('/')
//   })
//   .catch(err => console.log("GET Seed Error: ", err))
// })

app.get('/', (req, res) => {
  Log.find({}, (err, foundLog) => {
    res.json(foundLog)
  })
  res.redirect('/')
});

app.delete('/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.json(deletedLog)
  })
});

app.put('/:id', (req, res) => {
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
res.json(updatedLog)
  })
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


mongoose.connect('mongodb://localhost:27017/travelLog')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});