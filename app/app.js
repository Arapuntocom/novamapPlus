'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router', 
  'header',
  'draw',
  'dibujo'
])

.config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
   $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise("/");
  $stateProvider

  .state('inicio', {
    url: '/',
    templateUrl: 'view/add/add.html' 
  })

  .state('draw', {
    url: '/draw',
    templateUrl: 'view/draw/draw.html',
    controller: 'DrawController'
  })

  .state('dibujo', {
    url: '/dibujo',
    templateUrl: 'view/dibujo/dibujo.html',
    controller: 'DibujoController'
  })

  .state('test', {
    url: '/try',
    templateUrl: 'view/try/try.html',
    controller: 'DibujoController'
  });


 // $routeProvider.otherwise({redirectTo: '/'});
}]);
