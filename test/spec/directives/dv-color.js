'use strict';

describe('Directive: dvColor', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div dv-color="blue">text</div>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.css('color')).toBe('blue');
  }));
});
