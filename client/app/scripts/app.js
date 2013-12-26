'use strict';

angular.module('spriteslootApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'ngFitText'
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
      .when('/crunching', {
          templateUrl: 'views/crunching.html'
      })
      .otherwise({
          redirectTo: '/crunching'
        });
  });
