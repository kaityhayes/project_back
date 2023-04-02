const mongoose = require('mongoose')

const logSchema = new mongoose.Schema ({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String,
  latitude: {
    type: Number,
    required: false
  },
  longitude: {
    type: Number,
    required: false
  },
  visitDate: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  }
})

module.exports = mongoose.model('Log', logSchema)

// module.exports = Log

