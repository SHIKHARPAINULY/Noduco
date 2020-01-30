function detailController($scope, $attrs, $element , $rootScope) {
    $scope.input="Shikhar Painuly";
    $rootScope.depttArray = [
        {   department:'Mechanical' ,
            studenList: ['M1','M2','M3','M4','M5','M6']
        },
        {   department: 'Computer',
            studenList: ['C1','C2','C3','C4','C5','C6']
        },
        {   department: 'Electrical' ,
            studenList: ['E1','E2','E3','E4','E5','E6']
        },
        {   department: 'AutoMobile',
            studenList: ['AM1','AM2','AM3','AM4','AM5','AM6']
        },  
    ];
    $scope.depttArray = $rootScope.depttArray ;
    $rootScope.$on('MyEvent', (event) => {
        $scope.input = event.currentScope.username;
    });
}

angular.module('Jsapppp',[]).component('detailsCompo', {
    restrict: 'E',
    templateUrl:'views/features/detail/detail.component.html',
    controller : detailController,
    controllerAs : 'DetailCtrl',
    bindings : {
        options : '='
    }
});