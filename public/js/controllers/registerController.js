angular.module('tasksAgend')
	.controller('RegisterController', function($scope, $rootScope, AuthService, toastr) {

		$rootScope.section = 'register'

		$scope.register = function(event) {
			event.preventDefault()
			const { username, password } = $scope

			AuthService.register(username, password)
				.then( () => {
					toastr.success('Success creating new user', 'Hello')
				})
				.catch( () => {
					toastr.error('Error', 'Error')
				})
		}

	})
