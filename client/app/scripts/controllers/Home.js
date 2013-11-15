'use strict';

angular.module('yoAngularApp')
  .controller('HomeCtrl', function ($scope, $routeParams, $http) {

    $http.get('sloot-content/sloot-content.json').success(function(data){

      $scope.clusters = data.slootCollection;
      $scope.limitQty = 10;
      $scope.clusterFilter = $routeParams.clusterID;

      if ($scope.clusterFilter !== undefined)
      {
        angular.forEach($scope.clusters, function(cluster) {

          if (cluster.title === $scope.clusterFilter) {
            $scope.limitQty = cluster.slootItems.length;
          }

        });
      }

    });
  });
