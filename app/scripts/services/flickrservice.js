'use strict';

/**
 * @ngdoc service
 * @name potatoProjectApp.flickrService
 * @description
 * # flickrService
 * Service in the potatoProjectApp.
 */



angular.module('potatoProjectApp')
	.service('flickrPhotos', function (shareDataService) {
    return $resource('https://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsonpCallbackParam: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
});
