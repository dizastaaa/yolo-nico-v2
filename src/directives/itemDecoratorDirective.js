'use strict';

//Definition de la directive
app.directive('decorateItem', function () {
    //Return de l'objet avec ses propriétés
    return {
        templateUrl: 'views/item/directive/decorator.html'
       //Restriction (ne match que sur un élément)
       // restrict: 'C';
    }
    
})
;
