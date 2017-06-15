angular.module('tasksAgend')
  .controller('LoginController', function($scope, $rootScope, $location, ApiService, AuthService, toastr) {
    $rootScope.section = "login"

    $scope.login = function (event) {
      event.preventDefault()
      const { username, password } = $scope

      AuthService.login(username, password)
          .then(msg => {
            console.log(msg)
            toastr.success('Success logging in', 'Hello')
            $rootScope.section = "main"
            $location.path('/main')
          })
          .catch( () => {
            toastr.error('Wrong Username/Password ', 'Error prova')
          })
    }

    $scope.getData = function () {
      DataService.getSecretData()
          .then(data => $scope.message = data.msg)
     }


  })