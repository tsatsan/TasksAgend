const Task = require('../../../models/Task')
const debug = require('debug')('tasks')

function getAll(req, res) {
  Task.find()
      .then(tasks => {
      	  debug('succesfully got all tasks...')
        res.json(tasks)
        
    })
}

module.exports = getAll
