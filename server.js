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
mongoose.connect('/localhost:3008/', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/seed', (req, res) => {
  Log.create(LogSeed).then(log => {
    res.redirect('/')
  })
  .catch(err => console.log("GET Seed Error: ", err))
})

app.get('/', (req, res) => {
  res.redirect('/')
}) 

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// export default app