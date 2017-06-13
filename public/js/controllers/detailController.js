angular.module('tasksAgend')
  .controller('detailController', function ($scope, $location, apiTasksService, id, $rootScope) {
    apiTasksService.getTaskById(id)
    .then(tasks => $rootScope.tasks = tasks)
      $scope.updateTask = function () {
     let {userName, userName2, dateRealized, title, description} = $rootScope
     dateRealized = moment(+dateRealized).valueOf()
     apiTasksService.updateTask({userName, userName2, dateRealized, title, description})
         .then(tasks => {
           $scope.tasks = tasks
           $location.path('/listTasks', $scope.tasks)
         })
    }
  })
