'use strict';

angular.module('teamTmntApp')
  .directive('dvTable', function () {
    return {
      templateUrl: '../views/directives/table-view.html',
      restrict: 'A',
      scope: {
      	dvTable: '=',
      	dvTableHeaders: '='
      }
    };
  });
