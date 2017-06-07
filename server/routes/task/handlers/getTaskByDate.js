const Task = require('../../../models/Task')

function getTaskByDate (req, res) {
  const dateToShow = +req.params.dateRealized

  console.log(dateToShow)
  Task.find({ dateRealized: dateToShow })
    .then(task => {
      res.json(task)
    })
}

module.exports = getTaskByDate
