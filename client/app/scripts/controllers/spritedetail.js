'use strict';

angular.module('spriteslootApp')
  .controller('SpritedetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.spriteID = $routeParams.spriteID;

    var items = $scope.spriteID.split('_');

    var collectionID = items[0];
    var spriteID = items[1];

    var spriteTitle = spriteID.replace('.cge', '');
    var screenName = spriteID.replace('cge', 'cgs');

    // // url is in the form of: sloot-content/Pigs/Pig1.cge.json
    // // url is in the form of: sloot-content/Pigs/Pig1.cgs.json

    // /* Get the screen file */
    $scope.entityUrl = 'sloot-content/' + collectionID + '/' + spriteID + '.json';
    $scope.entityImgUrl = 'sloot-content/' + collectionID + '/' + spriteID + '.png';

    $scope.screenUrl = 'sloot-content/' +  collectionID + '/' + screenName + '.json';
    $scope.spriteTitle = spriteTitle;

    $http.get($scope.entityUrl).success(function(data) {
      $scope.cgEntityModel = data;
    });

  }]);
