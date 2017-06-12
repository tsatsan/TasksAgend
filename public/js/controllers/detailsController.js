angular.module('tasksAgend')
  .controller('detailsController', function ($scope, $location, apiTasksService) {
    $scope.updateTask = function (id) {
      apiTasksService.updateTask(id)
      .then(tasks => $scope.tasks = tasks)
      }
  })

