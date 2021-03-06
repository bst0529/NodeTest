const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantShcema = new Schema({
  id: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  name_en: {
    type: String,
    require: false
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: false
  },
  location: {
    type: String,
    require: false
  },
  phone: {
    type: String,
    require: false
  },
  google_map: {
    type: String,
    require: false
  },
  rating: {
    type: Number,
    require: false
  },
  description: {
    type: String,
    require: false
  },
})
module.exports = mongoose.model('Restaurant', restaurantShcema)