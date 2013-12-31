'use strict';

angular.module('spriteslootApp')
  .directive('bs3collapse', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        element.addClass('collapse');

        scope.oneTimeCollapse = function() {
          element.removeClass('collapse');
          element.addClass('collapse.in');
        };
      }
    };
  }]);
