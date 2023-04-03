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
  travelers: {
    type: String,
    required: false
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }, 
  image: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Log', logSchema)

// module.exports = Log

