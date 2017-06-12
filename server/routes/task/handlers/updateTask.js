const Task = require('../../../models/Task')

function updateTask (req, res) {
  const { id } = req.params

  let { description, userName2, dateRealized } = req.body
  console.log({ description, userName2, dateRealized } )

  const updateData = {}
  if (description) updateData.description = description
  if (userName2) updateData.description = description
  if (dateRealized) updateData.dateRealized = dateRealized

  Task.findByIdAndUpdate(id, updateData)
  .then(msg => {
    res.status(200).json(msg)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

module.exports = updateTask

