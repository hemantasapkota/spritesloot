'use strict';

describe('Controller: SlooteditorCtrl', function () {

  // load the controller's module
  beforeEach(module('spriteslootApp'));

  var SlooteditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlooteditorCtrl = $controller('SlooteditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
