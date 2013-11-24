'use strict';

angular.module('yoAngularApp')
  .controller('SearchCtrl', function ($scope) {

  	$scope.selected = undefined;

  	$scope.states = ['Pigs', 'Blocks', 'Birds', 'Runner', 'Jumper', 'BlackBird', 'WhiteBird', 'Coins' ];

  });
