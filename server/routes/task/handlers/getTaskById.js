const Task = require('../../../models/Task')

function getTaskById (req, res) {
  const { id } = req.params
console.log(id)
  Task.getTaskById(id)
    .then(() => res.status(200).json({msg: `task w/ id ${id} removed properly`}))
    .catch(() => res.status(500).json({msg: `error removing  Task w/ id ${id} `}))
}

module.exports = getTaskById
