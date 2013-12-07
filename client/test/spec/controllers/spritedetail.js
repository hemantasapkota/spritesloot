'use strict';

describe('Controller: SpritedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('spriteslootApp'));

  var SpritedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpritedetailCtrl = $controller('SpritedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
