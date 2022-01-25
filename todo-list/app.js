const express = require('express')
const exphbs = require('express-handlebars')

const Todo = require('./models/todo')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const router = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(router)

app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost:${port}`)
})