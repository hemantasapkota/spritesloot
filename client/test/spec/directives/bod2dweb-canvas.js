'use strict';

describe('Directive: bod2dwebCanvas', function () {

  // load the directive's module
  beforeEach(module('yoAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bod2dweb-canvas></bod2dweb-canvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bod2dwebCanvas directive');
  }));
});
