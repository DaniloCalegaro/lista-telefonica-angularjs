angular.module('ui', []);

angular.module('ui').run(function ($templateCache) {
    $templateCache.put(
        'view/accordion.html',
        '<div class="ui-accordion-title alert alert-info hover-overlay" ng-click="open()"><a href="">{{title}}</a></div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>'
    );
});

angular.module('ui').directive('uiAccordions', function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module('ui').directive('uiAccordion', function () {
    return {
        templateUrl: 'view/accordion.html',
        transclude: true,
        scope: {
            title: '@title'
        },
        require: '^uiAccordions',
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = !scope.isOpened;
            };
        }
    };
});
