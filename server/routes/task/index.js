const express = require('express')
const router = express.Router()

const removeTask = require('./handlers/removeTask')
const updateCompleted = require('./handlers/updateCompleted')
const getTaskById = require('./handlers/getTaskById')
const updateTask = require('./handlers/updateTask')

router.delete('/id/:id', removeTask)
router.put('/id/:id', updateCompleted)
router.get('/id/:id', getTaskById)
router.put('/update/:id', updateTask)
module.exports = router
