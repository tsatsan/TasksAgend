angular.module('tasksAgend')
      .controller('newTaskController', function ($scope, $location, apiTasksService, $rootScope) {
        $scope.addNewTask = function () {
          let {userName, userName2, dateRealized, title, description} = $scope
          dateRealized = moment(+dateRealized).valueOf()
          apiTasksService.addTask({userName, userName2, dateRealized, description})
          .then(tasks => {
            $rootScope = {userName, userName2, dateRealized, description}
            $scope.tasks = tasks
            $location.path('/listTasks', $scope.tasks)
          })
        }
      })
