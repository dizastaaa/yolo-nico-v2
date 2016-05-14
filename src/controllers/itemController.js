'use strict';

app
    .controller('itemIndex', function ($scope, userProvider) {

    })

    .controller('itemList', function ($rootScope, $scope, itemProvider, $location) {
        $scope.items = itemProvider.getItems();
        
        $scope.remove = function (item) {
           itemProvider.remove(item);
        }
        
        //On la définit dans un scope car lié au ng-click
           $scope.edit = function (item) {
           //Va devoir passé l'item sur ce controller
               //On utilise le Rootscope, qui est un scope disponible partout
               $rootScope.itemToEdit = item;
               //avoir les logs
               console.log($rootScope.itemToEdit);
            //Service Angular pour être rédirigé
               $location.url('/items/edit')
        }
    
    })

    .controller('itemCreate', function ($scope, categoryProvider, itemProvider) {
        $scope.categories = categoryProvider.getCategories();
    //MAj des données plus besoin car pour affiché les données rapidement avant.   
    //$scope.items = itemProvider.getItems();

        $scope.save = function (item) {
            itemProvider.create(item);
        }
    })


    //Création du controller EDIT pour travailler avec la meme vue que le "create.html"
     .controller('itemEdit', function ($rootScope, $scope, categoryProvider, itemProvider, $location) {
        $scope.categories = categoryProvider.getCategories();
    
        $scope.item = $rootScope.itemToEdit;

        $scope.save = function (item) {
            itemProvider.update(item);
            $location.url('/items/')
        }
    })
;