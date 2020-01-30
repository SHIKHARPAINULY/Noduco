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
    controller : ($scope, $attrs, $element, $rootScope) => {
        var scope = this;
        scope.$onInit = function($scope) {

        },
        console.log('name : ' , $attrs.username);
    
        $scope.linkFunction = () => {
            alert('that linking ,function from different different component is working');
        },
        $scope.save = () => {
            let user = $("#modalInput").val();
            $rootScope.username =  user;
            $rootScope.$emit('MyEvent');
        }
    
    }
});