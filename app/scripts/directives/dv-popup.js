'use strict';

angular.module('teamTmntApp')
  .directive('dvPopup', function () {
    return {
      template: '<div class="popup" style="display: none" ng-transclude></div>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
        var selector = attrs.dvPopup,
        	targets = angular.element(document.body).find(selector);

        targets.on('click', function(){
        	element.find('.popup').toggle();
        });
      }

    };
  });
