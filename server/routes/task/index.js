const express = require('express')
const router = express.Router()

const updateTask = require('./handlers/updateTask')
const removeTask = require('./handlers/removeTask')
const showCompleted = require('./handlers/showCompleted')

router.put('/id/:id', updateTask)
router.delete('/id/:id', removeTask)
router.put('/id/:id', showCompleted)

module.exports = router
