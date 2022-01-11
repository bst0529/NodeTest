const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main" }));
app.set('view engine', 'handlebars')

const movieList = require('./movies.json')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  let movieOne = movieList.results.find(movie => movie.id.toString() === req.params.movie_id)
  res.render('show', { movie: movieOne })
})

app.get('/Search', (req, res) => {
  let keyword = req.query.keyword
  let movies = movieList.results.filter(movie =>{ return movie.title.toLowerCase().includes(keyword.toLowerCase())})
  res.render('index',{movies: movies, keyword: keyword})
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})