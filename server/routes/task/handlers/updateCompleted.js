const Task = require('../../../models/Task')
const moment = require('moment')

function updateCompleted (req, res){
  const { id } = req.params
  const dataToUpdate = { completed: true }
  Task.findByIdAndUpdate(id, dataToUpdate)
    .then(msg => {
      res.status(200).json(msg)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = updateCompleted
