const express = require('express')
const router = express.Router()

const getTaskByDate = require('./handlers/getTaskByDate')

router.get('/', getTaskByDate)

module.exports = router
