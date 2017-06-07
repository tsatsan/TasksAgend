const Task = require('../../../models/Task')

function addTask (req, res) {
  const {title, userName, userName2, description, dateRealized} = req.body
  const newTask = new Task({title, userName, userName2, description, dateRealized})
  console.log(req.body)

  newTask.save()
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = addTask
