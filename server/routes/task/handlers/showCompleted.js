const Task = require('../../../models/Task')
const moment = require('moment')

function showCompleted (req, res){
	console.log(req.params)
  
  const {_id, completed=true} = req.params
  

  Task.findByIdAndUpdate(_id, completed)
    .then(msg => {
      res.status(200).json(msg)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = showCompleted
