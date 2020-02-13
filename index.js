'use strict';
var app = angular.module('Jsapp', ['Jsappp', 'Jsapppp', 'Modalmodule', 'BtnModule']);

app.controller('mainctrl', function ($scope) {
	$scope.title =  "Basic";
});
app.factory('APPCache', function($cacheFactory) {
    // return $cacheFactory('APPCache', {
    //     capacity: 50
	// });
	
	return sessionStorage;
});