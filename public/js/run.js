angular.module('tasksAgend')
  .run(function($rootScope, $location, storageService, authService){

      if ( AuthService.isLoggedIn() ) {
        const token = storageService.getToken()
        authService.setCredentials(token)
      }

      $rootScope.$on( "$routeChangeStart", function(event, next, current) {

        if (next && next.secure) {
          console.log("Secured route.")
          if ( !AuthService.isLoggedIn() ) {
            $location.path("/login");
          }
        }

      });
  })