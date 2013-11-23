'use strict';

angular.module('yoAngularApp', ['ui'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/cluster/:clusterID', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
      .when('/sprites/:spriteID', {
          templateUrl: 'views/spritedetails.html',
          controller: 'SpriteDetailsCtrl'
        })
      .otherwise({
          redirectTo: '/home'
        });
  });
