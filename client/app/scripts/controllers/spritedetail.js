'use strict';

angular.module('spriteslootApp')
  .controller('SpritedetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    /* From URL param, split collection ID and sprite ID */
    $scope.spriteID = $routeParams.spriteID;
    var items = $scope.spriteID.split('_');
    var collectionID = items[0];
    var spriteID = items[1];

    /* Get the screen file */
    $scope.entityUrl = 'public/' + collectionID + '/' + spriteID + '.cge.json';
    $scope.entityImgUrl = 'public/' + collectionID + '/' + spriteID + '.cge.png';

    $scope.screenUrl = 'public/' +  collectionID + '/' + spriteID + '.cgs.json';
    $scope.spriteID = spriteID;

    $http.get($scope.entityUrl).success(function(data) {
      $scope.cgEntityModel = data;
    });

  }]);
