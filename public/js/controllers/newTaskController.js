angular.module('tasksAgend')
      .controller('newTaskController', function ($scope, $location, apiTasksService) {
        $scope.addNewTask = function () {
          const {userName, userName2, dateRealized, title, description} = $scope
          apiTasksService.addTask({userName, userName2, dateRealized, title, description})
          .then(tasks => {
            $scope.tasks = tasks
            $location.path('/listTasks', $scope.tasks)
          })
        }
      })
