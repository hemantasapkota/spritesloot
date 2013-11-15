'use strict';

describe('Controller: SpritedetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var SpritedetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpritedetailsCtrl = $controller('SpritedetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
