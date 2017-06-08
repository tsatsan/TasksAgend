angular.module('tasksAgend')
      .controller('newTaskController', function ($scope, $location, apiTasksService) {
        $scope.addNewTask = function () {
          let {userName, userName2, dateRealized, title, description} = $scope
          dateRealized = moment(+dateRealized).valueOf()
          apiTasksService.addTask({userName, userName2, dateRealized, title, description})
          .then(tasks => {
            $scope.tasks = tasks
            $location.path('/listTasks', $scope.tasks)
          })
        }
      })
