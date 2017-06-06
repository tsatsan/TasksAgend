angular.module('tasksAgend')
      .controller('newTaskController', function ($scope, $rootScope, $location, apiTasksService) {
        $scope.addNewTask = function (){
 			
          var nameUser = $scope.userName
          var nameUser2 = $scope.userName2
          var dateCreation = $scope.dateTaskCreate
          var dateRealized = $scope.dateTaskRealized
          var title = $scope.title
          var description = $scope.description
          // var completed = $scope.completed
          apiTasksService.addTask(nameUser, nameUser2, dateCreation, dateRealized, title, description)
          .then(tasks => {
            $scope.tasks = tasks
            console.log(tasks)
            $location.path('/listTasks', $scope.tasks)
          })
        }
      })
