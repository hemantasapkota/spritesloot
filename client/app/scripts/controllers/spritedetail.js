'use strict';

angular.module('spriteslootApp')
  .controller('SpritedetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    /* From URL param, split collection ID and sprite ID */
    $scope.spriteID = $routeParams.spriteID;
    var items = $scope.spriteID.split('_');
    var collectionID = items[0];
    var spriteID = items[1];

    /* Parse Sprite Title and Screen Name */
    var spriteTitle = spriteID.replace('.cge', '');
    var screenName = spriteID.replace('cge', 'cgs');

    // url is in the form of: public/Pigs/Pig1.cge.json
    // url is in the form of: public/Pigs/Pig1.cgs.json

    /* Get the screen file */
    $scope.entityUrl = 'public/' + collectionID + '/' + spriteID + '.json';
    $scope.entityImgUrl = 'public/' + collectionID + '/' + spriteID + '.png';

    $scope.screenUrl = 'public/' +  collectionID + '/' + screenName + '.json';
    $scope.spriteTitle = spriteTitle;

    $http.get($scope.entityUrl).success(function(data) {
      $scope.cgEntityModel = data;
    });

  }]);
