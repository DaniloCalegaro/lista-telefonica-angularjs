angular.module('listaTelefonica').directive('uiAlert', function () {
    return {
        templateUrl: 'view/alert.html',
        restrict: 'E',
        replace: true,
        scope: {
            title: '@title'
            //error: '=message'
        },
        transclude: true
    };
});
