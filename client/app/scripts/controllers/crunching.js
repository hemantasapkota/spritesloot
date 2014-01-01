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
    $scope.showSpinner=false;
    $scope.isGameDev=false;

    //Error mgmt
    $scope.showError = function(msg) {
      $scope.showSubscribeError = true;
      $scope.subscribeAlertMsg = msg;
      window.setTimeout($scope.resetError, 1000); //auto clear the alert
    }

    $scope.resetError = function() {
      $scope.showSubscribeError = false;
      $scope.subscribeAlertMsg = "";
    }
    $scope.resetError(); //reset error at the start
    //End error mgmt

    //Modal Instance Management
    var ModalInstanceCtrl = ['$scope', '$modalInstance', function($scope, $modalInstance) {
      $scope.cancel  = function() {
        $modalInstance.dismiss('Cancelled');
      };

      $scope.ok = function() {
        $modalInstance.close('next');
        var el = document.getElementById('editor');
        el.scrollIntoView();
      };
    }]; //End Modal Instance Ctrl

    //Subscbribe method
    $scope.subscribe = function() {
      if ($scope.email === undefined || $scope.email.trim().length === 0) {
        return;
      }

      $scope.showSpinner = true;

      //Filter the selection into an array
      var filter = $filter('filter');
      var filtered = filter($scope.gameFrameworks, 'true');
      var selection = [];
      angular.forEach(filtered, function(item) {
        selection.push(item.name);
      });

      var data = {'email' : $scope.email, 'isGameDev' : $scope.isGameDev, 'gameFrameworks' : selection, 'others' : $scope.others};

      $http.post('/api/preSignups', data)

      .success(function(data){

        $scope.showSpinner = false;

        if (data.error !== undefined) {
          $scope.showError(data.error.trim());
          return;
        }

        $modal.open({
          templateUrl: 'thankyou.html',
          controller: ModalInstanceCtrl
        });

      })
      .error(function(error) {
        $scope.showError('An error occurred while sending the request.');
        $scope.showSpinner=false;
      }); //End HTTP
    };
  }]);

