const Task = require('../../../models/Task')

function removeTask (req, res) {
  const { id } = req.params
  console.log(req.params)
  Task.findByIdAndRemove(id)
    .then(() => res.status(200).json({msg: `task w/ id ${id} removed properly`}))
    .catch(() => res.status(500).json({msg: `error removing  Task w/ id ${id} `}))
}

module.exports = removeTask
