
const mongoose = require('mongoose')

const CitiesSchema = new mongoose.Schema({
   code: Object,
   temp: Number,
   zip: Number,
   city: String,
   state: String,
})

const Cities = mongoose.model('Cities', CitiesSchema)

module.exports = Cities

