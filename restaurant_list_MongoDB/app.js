const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')
const restaurant = require('./models/restaurant')
const methodOverride = require('method-override')
const router = require('./routers/index')
require('./config/mongoose')

const app = express()
const port = 3000

app.use(express.static('public'))
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(router)

app.listen(port, () => {
  console.log(`This Express Server is running on http://localhost:${port}`)
})