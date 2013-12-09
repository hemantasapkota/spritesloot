'use strict';

angular.module('spriteslootApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui',
  'ui.bootstrap'
])
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
          templateUrl: 'views/spritedetail.html',
          controller: 'SpritedetailCtrl'
        })
      .when('/sloot-editor', {
          templateUrl: 'views/slooteditor.html',
          controller: 'SlooteditorCtrl'
      })
      .otherwise({
          redirectTo: '/home'
        });
  });
