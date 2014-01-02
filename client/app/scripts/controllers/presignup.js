'use strict';

angular.module('spriteslootApp')
  .controller('PresignupCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {

    $scope.gridOptions = {data : 'preSignupData' };

    $http.get('/api/preSignups')

    .success(function(data) {

      $scope.preSignupData = data;
      $scope.total = data.length;
    });

  }]);
