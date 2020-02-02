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
        },
        scope.$doCheck = () => {
            $rootScope.selectedDepartment ?  $scope.selectedDepartment = $rootScope.selectedDepartment : false;
        },
        $scope.linkFunction = () => {
            alert('that linking ,function from different different component is working');
        },
        $scope.edit = (event , val) => {
            if( event == 'add') {
                let user = $("#modalInput").val();
                $rootScope.selectedDepartment.filter( (ele,index) => {
                    if( ele.department == $scope.selectedDepartment[0].department) {
                        ele.studenList.push(user);
                    }
                });
                // Adds popUp for student Added
               setTimeout(()=> {
                $( "#dialog").removeClass('hidden').addClass('active');
                $( "#dialog" ).dialog({
                    draggable: false,
                });
                setTimeout( ()=> {
                    $( "#dialog").removeClass('active').addClass('hidden');
                    $( "#dialog" ).dialog("close");
                },1000);
               },500); 
            }else if( event == 'delete') {
                $rootScope.selectedDepartment[0].studenList = $rootScope.selectedDepartment[0].studenList.filter( (ele,index) => index != val);
                $scope.selectedDepartment[0].studenList = $rootScope.selectedDepartment[0].studenList ;
            }
        }
    
    }
});