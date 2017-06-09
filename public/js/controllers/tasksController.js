angular.module('tasksAgend')
	.controller('tasksController', function ($scope, $timeout, apiTasksService) {
  const today = +new Date()
  $scope.selectedDay = today

  apiTasksService.getTaskByDate($scope.selectedDay)
			.then(tasks => $scope.tasks = tasks)

  $scope.movingDayNext = function () {
    $scope.selectedDay = moment($scope.selectedDay).add(1, 'days').valueOf()
    apiTasksService.getTaskByDate($scope.selectedDay)
			.then(tasks => $scope.tasks = tasks)
  }
  $scope.movingDayBack = function () {
    $scope.selectedDay = moment($scope.selectedDay).subtract(1, 'days').valueOf()
    apiTasksService.getTaskByDate($scope.selectedDay)
			.then(tasks => $scope.tasks = tasks)
  }

  $scope.markCompleted = function (id) {
    console.log(id)
    apiTasksService.showCompleted(id)
      .then(tasks => $scope.tasks = tasks)
  }
})
