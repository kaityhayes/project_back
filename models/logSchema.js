const mongoose = require('mongoose')

const logSchema = new mongoose.Schema ({
  city: {
    type: String,

  },
  country: {
    type: String,
   
  },
  description: {
    type: String,

  },
  travelers: {
    type: String,

  },
  startDate: {
    type: Date,
 
  },
  endDate: {
    type: Date,

  },
  rating: {
    type: Number,

  }, 
  image: {
    type: String,
 
  }

})

module.exports = mongoose.model('Log', logSchema)

// module.exports = Log

