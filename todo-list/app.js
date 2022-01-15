const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Todo = require('./models/todo')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!!!')
})

db.once('open', () => {
  console.log('mongodb connected!!!')
})

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // 取出 Todo model 裡的所有資料
  Todo.find()
    // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .lean()
    // 將資料傳給 index 樣板
    .then(todos => res.render('index', { todos }))
    // 錯誤處理
    .catch(error => console.error(error))
})

app.get('/todos/new', (req, res) => {
  res.render('new')
})

app.post('/todos', (req, res) => {
  // 從 req.body 拿出表單裡的 name 資料
  let name = req.body.name

  /*
  const todo = new Todo({ name })
  // 存入資料庫
  return todo.save()
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
  */

  return Todo.create({ name })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))

})

app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost:${port}`)
})