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
      return {
        getAll,
        addTask,
        getTaskByDate
      }
    })
