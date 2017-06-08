angular.module('tasksAgend')
    .controller('startUsersController', function ($scope, $rootScope, $location, apiTasksService) {
    	console.log('aaa...')
      $scope.selectUserJ = function () {
        $rootScope.userName = 'Jordi'
        $location.path('/listTasks')
      }
    })
