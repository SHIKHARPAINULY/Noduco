function listCompoController($attrs, $scope, $rootScope) {
		$scope.name = 'Siddharth';
		$rootScope.$on('ShowDepartmentList' , (event)=>{
			console.log('emitted event catched by the list component: ' , event);
		});
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