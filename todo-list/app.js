const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Todo = require('./models/todo')
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

app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost:${port}`)
})