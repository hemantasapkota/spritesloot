'use strict';

describe('Controller: CrunchingCtrl', function () {

  // load the controller's module
  beforeEach(module('spriteslootApp'));

  var CrunchingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrunchingCtrl = $controller('CrunchingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
