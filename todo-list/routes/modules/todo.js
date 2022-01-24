const express = require('express')
const Todo = require('../../models/todo')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  let id = req.params.id
  return Todo.findById(id)
    .lean()
    .then(todo => res.render('detail', { todo }))
    .catch(error => console.error(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then(todo => res.render('edit', { todo }))
    .catch(error => console.error(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body
  return Todo.findById(id)
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.error(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .then(todo => todo.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router