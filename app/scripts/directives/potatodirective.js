'use strict';

/**
 * @ngdoc directive
 * @name potatoProjectApp.directive:potatoDirective
 * @description
 * # potatoDirective
 */
angular.module('potatoProjectApp')
  .directive('whenScrolled', function () {
    return function(scope, elm, attr) {
        var raw = elm[0];
        
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
  });

