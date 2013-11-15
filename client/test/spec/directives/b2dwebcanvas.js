'use strict';

describe('Directive: b2dwebcanvas', function () {

  // load the directive's module
  beforeEach(module('yoAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<b2dwebcanvas></b2dwebcanvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the b2dwebcanvas directive');
  }));
});
