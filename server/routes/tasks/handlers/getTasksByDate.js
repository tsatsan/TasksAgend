const Task = require('../../../models/Task')
const moment = require('moment')

function getTasksByDate (req, res) {
  let { timestamp: dayToLocate } = req.params
  dayToLocate = +dayToLocate

  const dayAfter = moment(dayToLocate).add(1, 'day').valueOf()

  const query = {
    'dateRealized': {
      '$gte': dayToLocate,
      '$lt': dayAfter
  	}
  }
  Task.find(query)
    .then(task => {
      res.json(task)
    })
}

module.exports = getTasksByDate
