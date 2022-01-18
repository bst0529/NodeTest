const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
mongoose.connect('mongodb://localhost/restaurant-list')
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error!!!')
})

db.once('open', () => {
  console.log('mongoDB connected!!!');

let restaurantList = require('../../restaurant.json')

for (var restaurant of restaurantList.results) {
  Restaurant.create({
    id: restaurant.id,
    name: restaurant.name,
    name_en: restaurant.name_en,
    category: restaurant.category,
    image: restaurant.image,
    location: restaurant.location,
    phone: restaurant.phone,
    google_map: restaurant.google_map,
    rating: restaurant.rating,
    description: restaurant.description
  })
}

  console.log('done!!!')
})