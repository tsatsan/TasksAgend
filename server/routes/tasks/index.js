const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask')
const getTasksByDate = require('./handlers/getTasksByDate')

router.get('/', getAll)
router.post('/', addTask)
router.get('/date/:timestamp', getTasksByDate)

module.exports = router
