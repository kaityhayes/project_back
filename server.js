const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logSchema = './models/logSchema.js'
const app = express();
const port = process.env.PORT || 3008
// const Log = './models/logSchema.js'

app.use(cors());
app.use(express.json())

//MongoDB
mongoose.connect('mongodb://localhost/travel-log', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))


// const Log = mongoose.model('Log', logSchema);

//Routes
app.get('/logs', (req, res) => {
  Log.find()
    .then(logs => {
      res.json(logs);
    })
    .catch(err => {
      console.log(err);
      res.status().json({ error: 'Server error' });
    })
});

app.post('/logs', (req, res) => {
  const { city, country, description, image, latitude, longitude } = req.body;
  const newLog = new Log({
    title,
    description,
    image,
    latitude,
    longitude
  })
  newLog.save()
    .then(log => {
      res.json(log);
    })
    .catch(err => {
      console.log(err);
      res.status().json({ error: 'Server error' });
    })
});

app.put('/logs/:id', (req, res) => {
  const { city, country, description, image, latitude, longitude } = req.body;
  Log.findByIdAndUpdate(req.params.id, {
    title,
    description,
    image,
    latitude,
    longitude
  }, { new: true })
    .then(log => {
      res.json(log);
    })
    .catch(err => {
      console.log(err);
      res.status().json({ error: 'Server error' })
    })
});

app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.status().json({ error: 'Server error' });
    })
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// export default app