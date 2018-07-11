'use strict';

describe('Directive: potatoDirective', function () {

  // load the directive's module
  beforeEach(module('potatoProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<potato-directive></potato-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the potatoDirective directive');
  }));
});
