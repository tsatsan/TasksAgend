const Task = require('../../../models/Task')
const moment = require('moment')

function getTaskByDate (req, res) {
  const timestampToShow = req.query.dateRealized

  console.log(timestampToShow)

  const dateToShow = moment(timestampToShow, 'x') ;

console.log(dateToShow)

  const dateToShowEnd = dateToShow.add(1,'day')

  console.log('start',
	  				dateToShow.year(), 
	  				dateToShow.month(), 
	  				dateToShow.day(), 
  'end',
					dateToShowEnd.year(), 
					dateToShowEnd.month(), 
					dateToShowEnd.day())

  Task.find(
	{'dateRealized': 
		{
			"$gte": 
				new Date(
					dateToShow.year(),
					dateToShow.month(),
					dateToShow.day()),
			"$lt": 
				new Date(
					dateToShowEnd.year(),
					dateToShowEnd.month(),
					dateToShowEnd.day())
		}
	})
    .then(task => {
      res.json(task)
    })
}

module.exports = getTaskByDate
