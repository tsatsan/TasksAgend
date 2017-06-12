angular.module('tasksAgend')
    .controller('startUserController', function ($scope, $rootScope, $location, apiTasksService) {
  
      $scope.selectUserJ = function () {
        $rootScope.userName = 'Jordi'
        
        $location.path('/listTasks')
      }
      $scope.selectUserJa = function () {
        $rootScope.userName = 'Jaume'
        
        $location.path('/listTasks')
      }
      $scope.selectUserJu = function () {
        $rootScope.userName = 'JuanMa'
        
        $location.path('/listTasks')
      }
      $scope.selectUserA = function () {
        $rootScope.userName = 'Alex'
        
        $location.path('/listTasks')
      }
    })
