'use strict';

angular.module('spriteslootApp')
  .controller('SearchCtrl', ['$scope', function ($scope) {

  $scope.selected = undefined;

  $scope.states =
    ['Pigs',
     'Blocks',
     'Birds',
     'Runner',
     'Jumper',
     'BlackBird',
     'WhiteBird',
     'Coins' ];

}]);
