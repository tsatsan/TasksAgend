const Task = require('../../../models/Task')

function getTaskById (req, res) {
  const { id } = req.params
  Task.findById(id)
    .then(task => res.json(task))
    .catch(() => res.status(500).json({msg: `error catching  Task w/ id ${id} `}))
}

module.exports = getTaskById