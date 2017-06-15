angular.module('tasksAgend')
  .controller('loginController', function($scope, $rootScope, apiTasksService, authService) {
    $rootScope.section = "login"

    $scope.login = function (event) {
      event.preventDefault()
      const { username, password } = $scope

      authService.login(username, password)
           .then(msg => {
             console.log(msg)
            //$location.path('/profile')
        })
            .catch(console.log)
    }

	  // $scope.getData = function () {
	  //   DataService.getSecretData()
			// 		.then(data => $scope.message = data.msg)
		 // }
  })
