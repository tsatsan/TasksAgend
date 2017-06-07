const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'tasks'

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userName2: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  dateRealized: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { collection })
const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
