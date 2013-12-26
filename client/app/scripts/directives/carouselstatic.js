'use strict';

angular.module('spriteslootApp')
  .directive('carouselstatic', [function () {
    return {
      templateUrl: 'views/carouselstatic.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.myInterval = 5000;
        var slides = scope.slides = [];
        scope.addSlide = function(img, text) {
          slides.push({
            image: img,
            text: text
          });
        }

        var imgs = attrs.images.split(",");
        var imgTexts = attrs.description.split(",");
        for (var i=0; i<imgs.length; i++) {
          var img = imgs[i].replace("url('", "").replace("')", "").trim();
          var desc = imgTexts[i].trim();
          scope.addSlide(img, desc);
        }
      }
    };
  }]);
