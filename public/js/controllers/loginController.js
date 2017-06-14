angular.module('tasksAgend')
  .controller('loginController', function($scope, $rootScope, ApiService, AuthService) {
  	$rootScope.section = "login"

 		$scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    AuthService.login(username, password)
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
