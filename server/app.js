const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const moment = require('moment')


const app = express()

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const passport = require('./config/passport')

const routesAuth = require('./routes/auth')
// const privateRoutes = require('./routes/private')

// require('dotenv').load()


// const dbUrl = process.env.DB_URI
// const PORT = process.env.PORT


// mongoose.Promise = Promise
// mongoose.connect(dbUrl)

/* static folder */
app.use(express.static(path.join(__dirname + '/..', 'public')))

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* DEBUG req.body */
// app.use((req, res, next) => {
//   require('debug')('body-parser')(req.body)
//   next()
// })

app.use('/tasks', routerTasks)
app.use('/task', routerTask)


// app.use(passport.initialize())
app.use('/', routesAuth)
app.use(privateRoutes)

module.exports = app
