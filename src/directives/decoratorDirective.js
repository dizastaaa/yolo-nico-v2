'use strict';

app
    .directive('decorateItem', function () {
        return {
            templateUrl: 'views/item/directive/decorator.html',
            //câblage sur un élément
            restrict: 'E'
        }
    })
    .directive('decorateCategory', function () {
        return {
            templateUrl: 'views/category/directive/decorator.html',
            //câble
            restrict: 'E'
        }
    })
;