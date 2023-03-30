
const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
   code: Object
})

const Weather = mongoose.model('Weather', WeatherSchema)

module.exports = Weather

