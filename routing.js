'use strict';

app.config(
    function ($routeProvider) {
    
    $routeProvider
    //Définition du pointeur (path url)
    .when('/items/',{ //Deuxieme paramètre -> Objet
        //Le controlleur que l'on veut utiliser
            //Quand on se rend dans item on utilise celui ci
            controller: 'itemList',
        //on utilise cette vue
            templateUrl: 'views/item/list.html'
        
        })
        
        .when('/items/new',{
        
       controller: 'itemCreate',
        //on utilise cette vue
            templateUrl: 'views/item/create.html'
        
        })
    
        .when('/items/remove', {
        
        
        controller: 'itemRemove',
        templateUrl: 'views/item/remove.html'
    })
    
    }
    
);