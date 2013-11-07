'use strict';

describe('Directive: cocos2dCanvas', function () {

  // load the directive's module
  beforeEach(module('yoAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cocos2d-canvas></cocos2d-canvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cocos2dCanvas directive');
  }));
});
