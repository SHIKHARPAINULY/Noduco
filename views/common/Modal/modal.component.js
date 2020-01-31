'use strict';

angular.module('Modalmodule', []).component('modalCompo', {
    restrict:'E',
    templateUrl : 'views/common/Modal/modal.component.html',
    controllerAs: 'ModalCtrl',
    bindings : {
        text: '@?',
        username : '<?',
        linkFunction : '&'
    },
    controller : function ($scope, $attrs, $element, $rootScope) {
        var scope = this;
        scope.$onInit = function() {
            // scope.selectedDepartment = $rootScope.selectedDepartment ;
        },
        scope.$doCheck = () => {
            $rootScope.selectedDepartment ?  $scope.selectedDepartment = $rootScope.selectedDepartment : false;
            // $rootScope.selectedDepartment ?  $scope.selectedDepartment = $rootScope.selectedDepartment[0].studenList : false;
            // console.log('selectedDepartment : scope.$doCheck  ' ,   $scope.selectedDepartment);
        },
        $scope.linkFunction = () => {
            alert('that linking ,function from different different component is working');
        },
        $scope.save = () => {
            let user = $("#modalInput").val();
            $rootScope.selectedDepartment.filter( (ele,index) => {
                if( ele.department == $scope.selectedDepartment[0].department) {
                    ele.studenList.push(user);
                    // $rootScope.$emit('MyEvent');
                }
            });
        }
    
    }
});