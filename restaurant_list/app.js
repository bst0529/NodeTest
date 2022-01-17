const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const restaurantList = require('./restaurant.json')

app.get('/', (req, res) => {
    res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
    var oneRestaurant = restaurantList.results.find(x => x.id.toString() === req.params.restaurant_id)
    res.render('show', { restaurant: oneRestaurant })
})

app.get('/Search', (req, res) => {
    let keyword = req.query.keyword
    let restaurants = restaurantList.results.filter(restaurant => { return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase()) })
    res.render('index', { restaurants: restaurants, keyword: keyword })
})

app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})