'use strict';

describe('Directive: dvAppend', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-append text="initial text" append="appended text"></dv-append>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.text()).toBe('initial text appended text');
  }));
});
