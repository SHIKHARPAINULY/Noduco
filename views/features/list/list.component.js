function listCompoController($attrs, $scope, $rootScope) {
		$scope.name = 'Siddharth';
		$scope.DepartmentSelected = '';
		$scope.DisplayDepartmentStudentList = [];
		$rootScope.$on('mouseover' , ()=>{
			$rootScope.depttArray.filter(ele => {
				if (ele.department == $rootScope.ShowDepartmentList ){
					$scope.DepartmentSelected  = $rootScope.ShowDepartmentList;
					delete $rootScope.ShowDepartmentList;
					$scope.DisplayDepartmentStudentList=ele.studenList;
					$scope.listgenerated = true;
					console.log('which is 0 ',$scope.DisplayDepartmentStudentList );
					return;
				};
			});
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