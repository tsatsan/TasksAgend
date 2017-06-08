angular.module('tasksAgend')
      .controller('tasksController', function ($scope, $rootScope, apiTasksService) {
        $rootScope.date = new Date()
        var tomorrow = $scope.date
       
        // const newTomorrow = tomorrow.setDate(tomorrow.getDate()) 
        apiTasksService.getTaskByDate(tomorrow)
	          .then(tasks => {
	            $scope.tasks = tasks
	          })

   
        $scope.movingDayNext = function () {
          var tomorrow = $scope.date
          newTomorrow = tomorrow.setDate(tomorrow.getDate() + 1)
	          apiTasksService.getTaskByDate(newTomorrow)
	          .then(tasks => {
	            $scope.tasks = tasks
	          })
        }
        $scope.movingDayBack = function () {
          var yesterday = $scope.date
          yesterday.setDate(yesterday.getDate() - 1)
          console.log(yesterday)
        }
      })
