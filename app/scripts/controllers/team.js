'use strict';

angular.module('teamTmntApp')
  .controller('TeamsCtrl', ['$scope', 'teams', function ($scope, teams) {

  	$scope.teams = teams;
  	// console.log($scope.teams);

    
  }]);

  angular.module('teamTmntApp')
  .controller('TeamCtrl', ['$scope', 'team', function ($scope, team) {

  	$scope.team = team;
  	// console.log($scope.team);

    
  }]);
