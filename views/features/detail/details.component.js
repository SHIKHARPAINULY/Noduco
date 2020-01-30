function detailController($scope, $attrs, $element , $rootScope) {
    $scope.input="Shikhar Painuly";
    $rootScope.$on('MyEvent', (event) => {
        $scope.input = event.currentScope.username;
    });
}

angular.module('Jsapppp',[]).component('detailsCompo', {
    restrict: 'E',
    templateUrl:'views/features/detail/detail.component.html',
    controller : detailController,
    bindings : {
        options : '='
    }
});