angular.module('tasksAgend')
      .controller('tasksController', function ($scope, $rootScope, apiTasksService) {
        $rootScope.date = new Date()
        var tomorrow = $scope.date
        let dateTomorrow = +tomorrow
        apiTasksService.getTaskByDate(dateTomorrow)
	          .then(tasks => {
	            $scope.tasks = tasks
	          })

   
        $scope.movingDayNext = function () {
          var tomorrow = $scope.date
          tomorrow.setDate(tomorrow.getDate() + 1)
          const dateTomorrow = +tomorrow
	          apiTasksService.getTaskByDate(dateTomorrow)
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
