const express = require('express')
const Todo = require('../../models/todo')
const router = express.Router()

router.get('/', (req, res) => {
  // 取出 Todo model 裡的所有資料
  Todo.find()
    // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .lean()
    .sort({ _id: 'asc' })
    // 將資料傳給 index 樣板
    .then(todos => res.render('index', { todos }))
    // 錯誤處理
    .catch(error => console.error(error))
})

module.exports = router