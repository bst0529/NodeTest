const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const Todo = require('../todo')

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done')
})