angular.module('BtnModule', []).component('buttonCompo' , {
    restrict:'E',
    templateUrl:'views/common/button/button.component.html',
    bindings:{
        deptt:'<'
    },
    controller: function ($scope, $attrs, $element, $rootScope) {
        var scope = this;
        scope.$onInit = () => {
            $scope.labelName = $attrs.deptt;
        },
        $scope.showModal =  (eve) => {
            $rootScope.selectedDepartment = $rootScope.depttArray.filter( ele => ele.department ==  eve.target.innerText);
            $("#modalTrigger").click();
        },
        $scope.hover = (event) => {
            $rootScope.ShowDepartmentList =  event.target.id;
            $rootScope.$emit('mouseover');
        };
    }

});