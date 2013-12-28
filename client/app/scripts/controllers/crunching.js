'use strict';

angular.module('spriteslootApp')
  .controller('CrunchingCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.isCollapsed = true;

    $scope.doCollapse  = function() {
      $scope.isCollapsed = false;
    };

    $scope.subscribe = function() {
      if ($scope.email === undefined || $scope.email.trim().length === 0) {
        return;
      }

      var data = {'email' : $scope.email, 'isIndieGameDev' : $scope.isIndieGameDev || false };
      $http.post('/api/preSignup', data)
      .success(function(data){
        console.log(data);
      });
    };

  }]);
