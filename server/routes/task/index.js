const express = require('express')
const router = express.Router()

const updateTask = require('./handlers/updateTask')
const removeTask = require('./handlers/removeTask')
const updateCompleted = require('./handlers/updateCompleted')
const getTaskById = require('./handlers/getTaskById')

// router.put('/id/:id', updateTask)
router.delete('/id/:id', removeTask)
router.put('/id/:id', updateCompleted)
router.get('/id/:id', getTaskById)

module.exports = router
