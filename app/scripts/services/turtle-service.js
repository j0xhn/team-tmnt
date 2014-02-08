'use strict';

angular.module('teamTmntApp')
  .service('TurtleService', function TurtleService($q, $http) {
	  	return {
	    // AngularJS will instantiate a singleton by calling "new" on this function
	    getTeam: function(teamID){
	    	var deferred = $q.defer();

	    	$http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team/' + teamID}).
			  success(function(data, status, headers, config) {
			  	if (Array.isArray(data)) {
			  		deferred.resolve(data[0]);
			  	} else {
			  		deferred.resolve(data);
			  	}
			  	
			    // this callback will be called asynchronously
			    // when the response is available
			  }).
			  error(function(data) {
			  	deffered.reject(data);
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
			  return deferred.promise;
	    },

	    getTeams: function(teamID){
	    	var deferred = $q.defer();

	    	$http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).
			  success(function(data, status, headers, config) {
			  		deferred.resolve(data);
			  }).error(function(data, status, headers, config) {
			  	deffered.reject(data);
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
			  return deferred.promise;
	    }  		  	
  	}
  });
