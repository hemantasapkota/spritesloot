'use strict';

angular.module('spriteslootApp')
  .controller('HomeCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http
      .get('/sloot-content')
      .success(function(data){

      $scope.clusters = data.slootCollection;
      $scope.limitQty = 10;
      $scope.clusterFilter = $routeParams.clusterID;

      if ($scope.clusterFilter !== undefined)
      {
        angular
        .forEach($scope.clusters, function(cluster) {
          if (cluster.title === $scope.clusterFilter) {
            $scope.limitQty = cluster.slootItems.length;
          }
        });
      }
    });

  }]);
