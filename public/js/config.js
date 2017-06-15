angular.module('tasksAgend', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')// For fix URL issues "/!#/" -> "/#/"
    $routeProvider
      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      })
      .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
      })
      .when('/', {
        templateUrl: 'templates/index.html',
        controller: 'indexController'
      })
      .when('/startUsers', {
        templateUrl: 'templates/startUsers.html',
        controller: 'startUserController'
      })
      .when('/listTasks', {
        templateUrl: 'templates/listTasks.html',
        controller: 'tasksController'
      })
      .when('/newTask', {
        templateUrl: 'templates/newTask.html',
        controller: 'newTaskController'
      })
      .when('/detailTask', {
        templateUrl: 'templates/detailTask.html',
        controller: 'detailController'
      })
      .when('/logout', {
        template: '<h1>Logging out..</h1>',
        controller: 'LogoutController'
      })
      .otherwise('/login')
  })
