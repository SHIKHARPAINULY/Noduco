function listCompoController($attrs, $scope) {
		$scope.name = 'Siddharth';
	}
	
angular.module('Jsappp', []).component('listCompo', {
		restrict : 'E',
		controllerAs : 'listCtrl',
		templateUrl: 'views/features/list/list.component.html',
		controller : listCompoController,
		bindings : {
			name : '<',
			age : '<',
			exp : '@',
			years : '=',
			todo : '&'
		}
});