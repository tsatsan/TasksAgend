angular.module('tasksAgend')
      .controller('indexController', function ($scope, apiTasksService) {
        apiTasksService.getAll()
          .then(tasks => {$scope.tasks = tasks })
      })