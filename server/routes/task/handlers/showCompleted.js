const Task = require('../../../models/Task')
const moment = require('moment')

function showCompleted (req, res) {

  const { id } = req.params
  const { userName2, description, dateRealized } = req.body
  console.log(id)
  const completed= true
  const updateData = {}

  if (completed) updateData.completed = completed
  if (description) updateData.description = description
  if (userName2) updateData.userName2 = userName2

  Task.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.status(200).json(msg)
    })
    .catch( err => {
      res.status(500).json(err)
    })
}

module.exports = showCompleted
