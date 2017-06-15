angular.module('tasksAgend')
	.controller('registerController', function($scope, $rootScope, authService) {

		$rootScope.section = 'register'

		$scope.register = function(event) {

			event.preventDefault()
			const { username, password } = $scope

			authService.register(username, password)
				.then(console.log)
				.catch(console.log)
		}

	})

