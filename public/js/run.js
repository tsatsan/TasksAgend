angular.module('tasksAgend')
   .run(function($rootScope, $location, StorageService, AuthService){

      if ( AuthService.isLoggedIn() ) {
        const token = StorageService.getToken()
        AuthService.setCredentials(token)
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