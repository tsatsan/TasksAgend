angular.module('tasksAgend')
      .controller('startUserController', function ($scope, apiTasksService) {
        apiTasksService.getAll()
          .then(tasks => {
            $scope.tasks = tasks
          })
      })
