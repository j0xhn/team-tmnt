'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('teamTmntApp'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope,
      team:10
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.team).toBe(10);
  });
});
