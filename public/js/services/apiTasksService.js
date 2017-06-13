angular.module('tasksAgend')
    .factory('apiTasksService', function ($http) {
      function addTask (data) {
        return $http.post('/tasks', data)
                .then(function (response) {
                  return response.data
                })
      }
      function getAll () {
        return $http.get('/tasks')
                .then(response => response.data)
      }
      function getTaskByDate (date) {
        return $http.get('/tasks/date/' + date)
                .then(response => response.data)
      }
      function updateCompleted (id) {
        return $http.put('/task/id/' + id)
                .then(response => response.data)
      }
      function removeTask (id) {
        return $http.delete('/task/id/' + id)
                .then(response => response.data)
      }
      function updateTask (id) {
        return $http.put('/task/id/' + id)
                .then(response => response.data)
      }
      function getTaskById (id) {
        return $http.get('/task/id/' + id)
                .then(response => response.data)
      }
      return {
        getAll,
        addTask,
        getTaskByDate,
        updateCompleted,
        removeTask,
        updateTask,
        getTaskById
      }
    })
