'use strict';

angular.module('spriteslootApp')
  .controller('HomeCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http
      .get('/api/slootContent')
      .success(function(data){

      $scope.clusters = data;
      $scope.limitQty = 10;
      $scope.clusterFilter = $routeParams.clusterID;

      if ($scope.clusterFilter !== undefined)
      {
        angular
        .forEach($scope.clusters, function(cluster) {
          if (cluster.collectionTitle === $scope.clusterFilter) {
            $scope.limitQty = cluster.slootItems.length;
          }
        });
      }
    });

  }]);
