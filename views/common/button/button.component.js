angular.module('BtnModule', []).component('buttonCompo' , {
    restrict:'E',
    templateUrl:'views/common/button/button.component.html',
    bindings:{
        name:'<'
    },
    controller: function ($scope, $attrs, $element) {
        var scope = this;
        scope.$onInit = () => {
            $scope.labelName = $attrs.name;
        },
        $scope.showModal =  () => {
            $("#modalTrigger").click();
        }
    }

});