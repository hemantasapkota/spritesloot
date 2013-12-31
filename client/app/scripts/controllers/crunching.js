'use strict';

angular.module('spriteslootApp')
  .controller('CrunchingCtrl', ['$scope', '$http', '$filter', '$modal', function ($scope, $http, $filter, $modal) {

    $scope.gameFrameworks = [
      {name: 'Cocos2D-X', selected: false},
      {name: 'OpenFrameworks', selected: false},
      {name: 'LibGDX', selected: false},
      {name: 'Unity',  selected: false},
      {name: 'Game Maker', selected: false},
      {name: 'Stencyl', selected: false},
      {name: 'Game Salad', selected: false},
      {name: 'Construct2', selected: false}
    ];

    $scope.others = "";

    $scope.showSubscribeError = false;
    $scope.subscribeAlertMsg = "";

    $scope.subscribe = function() {
      if ($scope.email === undefined || $scope.email.trim().length === 0) {
        return;
      }

      //Filter the selection into an array
      var filter = $filter('filter');
      var filtered = filter($scope.gameFrameworks, 'true');
      var selection = [];
      angular.forEach(filtered, function(item) {
        selection.push(item.name);
      });

      var data = {'email' : $scope.email, 'isIndieGameDev' : $scope.isIndieGameDev || false, 'gameFrameworks' : selection, 'others' : $scope.others};

      $http.post('/api/preSignup', data)

      .success(function(data){

        if (data.error !== undefined) {
          $scope.subscribeAlertMsg =  data.error.trim();
          $scope.showSubscribeError = true;
          return;
        }

        $modal.open({
          templateUrl: 'thankyou.html'
        });

      })

      .error(function(error) {
        $scope.subscribeAlertMsg = 'An error occurred while sending the request';
        $scope.showSubscribeError = true;
      }); //End HTTP

    };

  }]);
