const Task = require('../../../models/Task')

function showCompleted (req, res) {
  const { _id } = req.params

  let completed = true
  Task.showCompleted(_id, completed)
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = showCompleted
