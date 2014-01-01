'use strict';

angular.module('spriteslootApp')
  .directive('checkedbtn', [function () {
    return {
      templateUrl: 'views/checkedbtn.html',
      restrict: 'E',
      transclude: 'true',
      scope: {
        btntext: '@',
        btnclass: '@',
        btnstyle: '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.btntext = attrs.btntext;
        scope.isChecked = false;

        scope.$watch('isChecked', function(newValue, oldValue) {
         var className = 'glyphicon glyphicon-ok';
         //TODO
         var el = element.context.childNodes[0].childNodes["btnIcon"];

          if (newValue === true) {
            el.setAttribute('class', className);
          }
          if (newValue ===  false) {
            el.removeAttribute('class');
          }

          if (scope.$parent.gf !== undefined) {
            scope.$parent.gf.selected = newValue;
          }

          if (scope.$parent.isGameDev !== undefined) {
            scope.$parent.isGameDev = newValue;
          }
        });
      } //End Link
    };
  }]);
