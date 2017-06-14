const Task = require('../../../models/Task')

function updateTask (req, res) {
  const { id } = req.params
  let { newFrom, newTo, newDate, newDescription } = req.body
console.log(newDate)
  const updateData = {}
  if (newFrom) updateData.userName = newFrom
  if (newTo) updateData.userName2 = newTo
  if (newDate) updateData.dateRealized = newDate
  if (newDescription) updateData.description = newDescription

  Task.findByIdAndUpdate(id, updateData)
    .then(() => res.status(200).json({ msg: `task w/ id ${id} updated properly`}))
    .catch(() => res.status(500).json({ msg: `error updating  task w/ id ${id}`}))
}

module.exports = updateTask