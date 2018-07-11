'use strict';

describe('Service: flickrService', function () {

  // load the service's module
  beforeEach(module('potatoProjectApp'));

  // instantiate service
  var flickrService;
  beforeEach(inject(function (_flickrService_) {
    flickrService = _flickrService_;
  }));

  it('should do something', function () {
    expect(!!flickrService).toBe(true);
  });

});
