'use strict';

describe('Directive: carouselstatic', function () {

  // load the directive's module
  beforeEach(module('spriteslootApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<carouselstatic></carouselstatic>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the carouselstatic directive');
  }));
});
