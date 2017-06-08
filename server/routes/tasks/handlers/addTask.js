const Task = require('../../../models/Task')
const moment = require('moment')

function addTask (req, res) {
  let {title, userName, userName2, description, dateRealized} = req.body
  dateRealized = moment(+dateRealized).valueOf()
  const newTask = new Task({title, userName, userName2, description, dateRealized})
  
  console.log( 'req body' + newTask)

  newTask.save()
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = addTask
