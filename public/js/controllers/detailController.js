angular.module('tasksAgend')
  .controller('detailController', function ($scope, $location, apiTasksService) {
    
    apiTasksService.getTaskById()
    .then(tasks => $scope.tasks = tasks)

    $scope.updateTask = function () {
     let {userName, userName2, dateRealized, title, description} = $scope
     dateRealized = moment(+dateRealized).valueOf()
     apiTasksService.updateTask({userName, userName2, dateRealized, title, description})
         .then(tasks => {
           $scope.tasks = tasks
           $location.path('/listTasks', $scope.tasks)
         })
     }
  })
