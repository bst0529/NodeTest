const express = require('express')
const router = express.Router()

const home = require('../routes/modules/home')
const todos = require('../routes/modules/todo')

router.use('/', home)
router.use('/todos', todos)

module.exports = router