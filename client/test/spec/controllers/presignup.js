'use strict';

describe('Controller: PresignupCtrl', function () {

  // load the controller's module
  beforeEach(module('spriteslootApp'));

  var PresignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PresignupCtrl = $controller('PresignupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
