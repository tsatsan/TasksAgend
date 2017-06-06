const Task = require('../../../models/Task')

function addTask (req, res) {
  const {title, nameUser, nameUser2, description, dateCreation, dateRealized} = req.body
  const newTask = new Task({title, nameUser, nameUser2, description, dateCreation, dateRealized})
  console.log(newTask)
  newTask.save()
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = addTask
