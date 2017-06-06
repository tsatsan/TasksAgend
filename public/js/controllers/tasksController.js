angular.module('tasksAgend')
      .controller('tasksController', function ($scope, apiTasksService) {
        apiTasksService.getAll()
          .then(tasks => {
            $scope.tasks = tasks
          })
      })