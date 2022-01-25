const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')
const restaurant = require('./models/restaurant')
const methodOverride = require('method-override')
const router = require('./routers/index')

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
app.use(methodOverride('_method'))
app.use(router)

app.listen(port, () => {
  console.log(`This Express Server is running on http://localhost:${port}`)
})