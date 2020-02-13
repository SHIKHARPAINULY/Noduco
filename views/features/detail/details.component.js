function detailController($scope, $attrs, $element , $rootScope) {
    $scope.input="Shikhar Painuly";
    $rootScope.depttArray = [
        {   department:'Mechanical' ,
            studenList: ['Manish','Mahesh','Manoj','Manjeet','Mohit','Mohan']
        },
        {   department: 'Computer',
            studenList: ['Charlie','Catherine','Cally','Calvin']
        },
        {   department: 'Electrical' ,
            studenList: ['Emey','Ellie','Ether','Evein','Eva','Eve']
        },
        {   department: 'AutoMobile',
            studenList: ['Aarav','Andy','Ankur','Ajay','Amanada','Amol']
        }, 
        {
            department:'civil',
            studenList:['shikhar']
        } 
    ];
    $scope.depttArray = $rootScope.depttArray ;
    // $rootScope.$on('MyEvent', (event) => {
    //     $scope.input = event.currentScope.username;
    //     $scope.depttArray = $rootScope.depttArray ;
    // });
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