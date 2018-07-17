'use strict';

/**
 * @ngdoc function
 * @name potatoProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the potatoProjectApp
 */
angular.module('potatoProjectApp')
  .filter('author', function() {
    return function(input) {
      var separator = '"';
      var arrayOfStrings = input.split(separator);
      if (arrayOfStrings.length >= 2) {
        return arrayOfStrings[1]
      } else {
        return arrayOfStrings[0];
      }

    };
  })

  .filter('tags', function() {
    return function(input) {
      var tagsSeparator = ' ';
      var arrayOfStrings = input.split(tagsSeparator,3);
      return arrayOfStrings;
      console.log(arrayOfStrings);

    };
  })
  .controller('AboutCtrl', ['$window', '$scope', function($window, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var data = $window.sessionStorage.data;
    $scope.feed = JSON.parse(data);
    console.log("data = ", $scope.feed);



  }]);
