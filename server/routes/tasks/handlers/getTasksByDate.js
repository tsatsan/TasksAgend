const Task = require('../../../models/Task')
const moment = require('moment')

function getTasksByDate (req, res) {
  let { timestamp: dayToLocate } = req.params
  dayToLocate = +dayToLocate

  console.log(dayToLocate)

  const dayAfter = moment(dayToLocate).add(1, 'day').valueOf()

  const query = {
    'dateRealized': {
      '$gte': dayToLocate,
      '$lt': dayAfter
  	}
  }
  console.log(query)
  Task.find(query)
    .then(task => {
    	console.log('result task...')
    	console.log(task)
      res.json(task)
    })
}

module.exports = getTasksByDate
