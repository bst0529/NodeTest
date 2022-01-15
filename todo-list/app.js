const express = require('express')
const mongoose = require('mongoose')
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

app.get('/', (req, res) => {
  res.send('This is Root')
})

app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost:${port}`)
})