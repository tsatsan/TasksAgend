const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  nameUser: {
    type: String,
    required: true
  },
  nameUser2: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAdd: {
    type: Number,
    default: +new Date()
  },
  dateTask: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
