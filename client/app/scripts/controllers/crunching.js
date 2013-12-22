'use strict';

angular.module('spriteslootApp')
  .controller('CrunchingCtrl', ['$scope', function ($scope) {

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(img, text) {
      slides.push({
        image: img,
        text: text
      });
    }

    $scope.addSlide('public/images/screenshots/EdPreview.png', 'Sloot Editor Main');
    $scope.addSlide('public/images/screenshots/EdRender.png', 'Render Level');
    $scope.addSlide('public/images/screenshots/EdEntity.png', 'Edit Entity');
    $scope.addSlide('public/images/screenshots/EdScripting.png', 'Lua Scripting');

  }]);
