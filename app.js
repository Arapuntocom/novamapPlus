'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router', 
  'header',
  'draw',
  'draw.tree',
  'dibujo'
])

.config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
   $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise("/");
  $stateProvider

  .state('inicio', {
    url: '/',
    templateUrl: 'view/dibujo.html',
    controller: 'DibujoController'
  })

  .state('draw', {
    url: '/draw',   
    templateUrl: 'view/draw.html'
  })

  .state('dibujo', {
    url: '/dibujo',
    templateUrl: 'view/dibujo.html',
    controller: 'DibujoController'
  })

  .state('test', {
    url: '/test',
    templateUrl: 'view/test.html',
    controller: 'DibujoController'
  });;


 // $routeProvider.otherwise({redirectTo: '/'});
}]);
