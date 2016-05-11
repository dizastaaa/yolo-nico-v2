'use strict';


app
    .controller('itemIndex', function ($scope) {
    
    
})
    .controller('itemList', function ($scope, itemProvider){
           
    //Injection de item provider dans itemlist
        //items récupérés par le provider
        //définition des items dans le scode du controller
        $scope.items = itemProvider.getItems();
    
})
    .controller('itemCreate', function ($scope, categoryProvider, itemProvider){
    
    //Récupération dans le scope de controller
    $scope.categories = categoryProvider.getCategories();
    
    //Définir dans le scope : MAJ live des items
    $scope.items = itemProvider.getItems();
    
    //MAJ automatique de la vue (modification du modèle)
    $scope.createItem = function (item) {
        $scope.items = itemProvider.create(item);
    }
    
    
})
    .controller('itemRemove', function ($scope, categoryProvider, itemProvider){
    
    $scope.categories = categoryProvider.getCategories();
    $scope.items = itemProvider.getItems();
   
    $scope.deleteItem = function (item) {
        $scope.items = itemProvider.delete(item);
    }
    
    
})
;