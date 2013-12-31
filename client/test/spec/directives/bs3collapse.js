'use strict';

describe('Directive: bs3collapse', function () {

  // load the directive's module
  beforeEach(module('spriteslootApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bs3collapse></bs3collapse>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bs3collapse directive');
  }));
});
