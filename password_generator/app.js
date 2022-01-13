const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
//const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  let options = req.body
  let password = generatePassword(options)
  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost:${port}`)
})