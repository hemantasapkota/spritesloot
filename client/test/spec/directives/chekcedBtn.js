'use strict';

describe('Directive: chekcedBtn', function () {

  // load the directive's module
  beforeEach(module('spriteslootApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chekced-btn></chekced-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chekcedBtn directive');
  }));
});
