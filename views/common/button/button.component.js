angular.module('BtnModule', []).component('buttonCompo' , {
    restrict:'E',
    templateUrl:'views/common/button/button.component.html',
    bindings:{
        name:'<'
    },
    controller: function ($scope, $attrs, $element, $rootScope) {
        var scope = this;
        scope.$onInit = () => {
            $scope.labelName = $attrs.name;
        },
        $scope.showModal =  (eve) => {
            $rootScope.selectedDepartment = $rootScope.depttArray.filter( ele => ele.department ==  eve.target.innerText);
            console.log('  $rootScope.selectedDepartment : ' ,   $rootScope.selectedDepartment);
            $("#modalTrigger").click();
        }
    }

});