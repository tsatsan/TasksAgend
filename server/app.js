const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const moment = require('moment')


const app = express()

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')
const routesAuth = require('./routes/auth')
const privateRoutes = require('./routes/private')

const passport = require('./config/passport')

/* static folder */
app.use(express.static(path.join(__dirname + '/..', 'public')))

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/tasks', routerTasks)
app.use('/task', routerTask)
app.use('/', routesAuth)
app.use(privateRoutes)

app.use(passport.initialize())

module.exports = app
