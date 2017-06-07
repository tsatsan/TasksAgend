angular.module('tasksAgend')
      .controller('startUserController', function ($scope, $rootScope, $location, apiTasksService) {
         $scope.selectUserJ = function () {
           $rootScope.userName = 'Jordi'
           $location.path('/listTasks')
         }
      })
