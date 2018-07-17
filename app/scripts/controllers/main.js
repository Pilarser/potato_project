'use strict';

/**
 * @ngdoc function
 * @name potatoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoProjectApp
 */

var place = 'Mediterranean sea';

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

  .controller('MainCtrl', ['$scope', '$location', '$window', 'flickrPhotos', function($scope, $location, $window, flickrPhotos) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     
    if ($window.sessionStorage.searchValue) {
        place = $window.sessionStorage.searchValue;
    }
    $scope.feeds = flickrPhotos.load({ tags: place });


    $scope.change_page = function(data) {
      sessionStorage.setItem('data', angular.toJson(data));

      $location.path('/about');
      console.log("data = ", data);
    };

    $scope.findValue = function(enteredValue) {
      $scope.feeds = flickrPhotos.load({ tags: enteredValue });
      sessionStorage.setItem('searchValue', enteredValue);
    };
  }])
