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

  .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    window.getPhotos = function(data) {
      $scope.$apply(function() {
        $scope.feeds = data.items;
      });
    }

    var src = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + place + "&tagmode=any&format=json&jsoncallback=getPhotos";
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);



    $scope.feeds = [];

    $scope.loadMore = function(feed) {
      $scope.feeds.push();
    };

    $scope.loadMore();


    $scope.change_page = function(data) {
      sessionStorage.setItem('data', angular.toJson(data));

      $location.path('/about');
      console.log("data = ", data);
    };
  }])
