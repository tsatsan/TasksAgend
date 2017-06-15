angular.module('tasksAgend')
    .factory('AuthService', function ($http, $rootScope, StorageService, jwtHelper) {

        function login (username, password) {
        return $http.post('/login', { username, password })
                    .then(response => response.data)
                    .then(data => {
                          StorageService.setToken(data.token)
                          setCredentials(data.token)
                          return data
                        })
      }

      function register (username, password) {
        return $http.post('/register', { username, password })
                    .then(response => response.data)
      }

      function isLoggedIn() {
        const token = StorageService.getToken()
        if (!token) return false
        return true
    }

        function logout() {
            StorageService.removeToken()
            delete $rootScope.loggedUser
        }

        function setCredentials( token ) {
            var tokenPayload = jwtHelper.decodeToken( token )
      $rootScope.loggedUser = capitalizeUser(tokenPayload.username)
        }

    function capitalizeUser(nickname) {
      return nickname.charAt(0).toUpperCase() + nickname.slice(1)
    }

    return { login, register, isLoggedIn, logout, setCredentials}
    })