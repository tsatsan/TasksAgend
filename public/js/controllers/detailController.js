angular.module('tasksAgend')
  .controller('detailController', function ($scope, $location, apiTasksService) {
     
    $scope.updateTask = function (id) {
    const {newFrom, newTo, newDate, newDescription} = $scope
   	// console.log(id)
     apiTasksService.updateTask({newFrom, newTo, newDate, newDescription}, id)
         .then(task => {
           $scope.task = task
        })
    }
})
      