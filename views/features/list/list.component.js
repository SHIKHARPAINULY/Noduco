function listCompoController($attrs, $scope, $rootScope,$cacheFactory, APPCache) {
	//  setting abngularjs cache in memory 
	 	// $scope.cache = $cacheFactory('USERS');
		// $scope.cache.put('user', 'SHIKHAR PAINULY');
		// APPCache.put(angular.lowercase('shikhar'), 'shikharshikhar');
		APPCache.setItem(angular.lowercase('shikhar'), 'shikharshikhar');
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
					return;
				};
			});
		});

		$rootScope.$watch(()=>{
			$rootScope.depttArray.filter(ele => {
				if ( ele.department ==  $scope.DepartmentSelected  && $scope.DisplayDepartmentStudentList.length != ele.studenList.length){
					$scope.DisplayDepartmentStudentList = ele.studenList;
					console.log('this is the cache  factory : ' ,  APPCache.getItem('shikhar'));
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