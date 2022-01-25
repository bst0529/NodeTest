const express = require('express')
const Restaurant = require('../../models/restaurant')
const router = express.Router()

router.get('/search', (req, res) => {
    const keyword = req.query.keyword.toLowerCase()
    return Restaurant.find()
      .lean()
      .then(restaurants => res.render('index', { restaurants: restaurants.filter(restaurant => { return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword) }) }))
      .catch(error => console.error(error))
  })
  
  router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .lean()
      .then(restaurant => res.render('edit', { restaurant }))
      .catch(error => console.error(error))
  })

  router.get('/new', (req, res) => {
    res.render('new')
  })

  router.post('/', (req, res) => {
    const restaurant = req.body
    return Restaurant.create({
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description,
    })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
  })
  
  router.put('/', (req, res) => {
    let params = req.body
    return Restaurant.findById(params._id)
      .then(restaurant => {
        restaurant.name = params.name
        restaurant.name_en = params.name_en
        restaurant.category = params.category
        restaurant.image = params.image
        restaurant.location = params.location
        restaurant.phone = params.phone
        restaurant.google_map = params.google_map
        restaurant.rating = params.rating
        restaurant.description = params.description
        return restaurant.save()
      })
      .then(() => res.redirect('/'))
      .catch(error => console.error(error))
  })
  
  router.get('/detail/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .lean()
      .then(restaurant => res.render('detail', { restaurant }))
      .catch(error => console.error(error))
  })
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .then(restaurant => restaurant.remove())
      .then(() => res.redirect('/'))
      .catch(error => console.error(error))
  })

  module.exports = router