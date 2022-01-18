const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/restaurant-list')
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoDB error!!!')
})

db.once('open', () => {
  console.log('mongoDB connected!!!');
})

app.use(express.static('public'))
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

app.get('/search', (req, res) => {
  var keyword = req.query.keyword.toLowerCase()
  return Restaurant.find()
    .lean()
    .then(restaurants => res.render('index',{restaurants: restaurants.filter(restaurant => {return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)})}))
    .catch(error => console.error(error))
})

app.get('/edit/:id', (req, res) => {
  var id = req.body.id
})

app.listen(port, () => {
  console.log(`This Express Server is running on http://localhost:${port}`)
})