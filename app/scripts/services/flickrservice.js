'use strict';

/**
 * @ngdoc service
 * @name potatoProjectApp.flickrService
 * @description
 * # flickrService
 * Service in the potatoProjectApp.
 */



angular.module('potatoProjectApp')
	.service('flickrPhotos', function ($resource) {
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
});