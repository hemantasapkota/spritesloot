'use strict';

describe('Directive: b2webcanvas', function () {

  // load the directive's module
  beforeEach(module('spriteslootApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<b2webcanvas></b2webcanvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the b2webcanvas directive');
  }));
});
