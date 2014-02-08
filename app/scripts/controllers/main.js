'use strict';

angular.module('teamTmntApp')
  .controller('MainCtrl', ['$scope','teams', function ($scope, teams) {
  	$scope.teams = teams;
  	console.log($scope.teams);
    
  }]);
