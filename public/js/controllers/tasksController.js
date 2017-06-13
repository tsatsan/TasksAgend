angular.module('tasksAgend')
	.controller('tasksController', function ($scope, $timeout, apiTasksService, $rootScope, $location, $window) {
  const today = +new Date()
  $scope.selectedDay = today
    apiTasksService.getTaskByDate($scope.selectedDay)
    .then(tasks => $scope.tasks = tasks)
 
  $scope.movingDayNext = function () {
       $scope.calendar = false
    $scope.selectedDay = moment($scope.selectedDay).add(1, 'days').valueOf()
    apiTasksService.getTaskByDate($scope.selectedDay)
      .then(tasks => $scope.tasks = tasks)
  }
  $scope.movingDayBack = function () {
      $scope.calendar = false
    $scope.selectedDay = moment($scope.selectedDay).subtract(1, 'days').valueOf()
    apiTasksService.getTaskByDate($scope.selectedDay)
      .then(tasks => $scope.tasks = tasks)
  }

  $scope.selectNewDate = function () {
    const newDateCalendar = $scope.selectedDay - today
    const daysPassToday = moment.duration(newDateCalendar).days()
    console.log(daysPassToday)
    $scope.selectedDay = moment($scope.selectedDay).add(daysPassToday, 'days').valueOf()
    apiTasksService.getTaskByDate($scope.selectedDay)
      .then(tasks => $scope.tasks = tasks)
  }

  $scope.updateCompleted = function (id, dataToUpdate) {
    apiTasksService.updateCompleted(id, dataToUpdate)

    console.log(dataToUpdate)
      .then(tasks => $scope.tasks = tasks)
  }

  $scope.removeTask = function (id) {
    apiTasksService.removeTask(id)
        .then( $window.location.reload() )

    }
  $scope.updateTask = function (id) {
    apiTasksService.updateTask(id)
       $location.path('/detailTask', $rootScope.tasks)
      }

   $scope.showCalendarInput = function () {
    $scope.calendar = true
  }

})
