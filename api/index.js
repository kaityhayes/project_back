const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect('/localhost:3008', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))


const Log = require('./models/logSchema')


app.get('/logs', async (req, res) => {
    try {
      const logs = await Log.find()
      res.json(logs)
    } catch (err) {
      console.error(err)
      res.status().json({ message: 'Server error' })
    }
  });


  app.post('/logs', async (req, res) => {
    try {
      const { title, description, image, latitude, longitude, visitDate, rating } = req.body
      const log = new Log({ title, description, image, latitude, longitude, visitDate, rating })
      await log.save()
      res.json(log)
    } catch (err) {
      console.error(err)
      res.status().json({ message: 'Server error' })
    }
  });


  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status().json({ message: 'Server error' })
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app

