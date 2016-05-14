'use strict';
//RouteProvider founit par angular + ajout des méthodes pour définir les controlleurs a utiliser / les routes / les templates
app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'views/index/index.html',
                //ETAPE 1 : Implémentation du système d'accès
                access: {
            //définir si il est autorisé ou pas
                isFree: true
        }
            
            })
        
            .when('/create-user', {
                controller: 'indexCreateUser',
                templateUrl: 'views/index/createUser.html',
              access: {
            //définir si il est autorisé ou pas
                isFree: true
        }
            
            })
            .when('/items', {
                controller: 'itemList',
                templateUrl: 'views/item/list.html',
              access: {
            //définir si il est autorisé ou pas
                isFree: false
        }
            
            })
            .when('/items/new', {
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html',
              access: {
            //définir si il est autorisé ou pas
                isFree: false
        }
            
            })
        
             .when('/items/edit', {
                controller: 'itemEdit',
                templateUrl: 'views/item/create.html',
              access: {
            //définir si il est autorisé ou pas
                isFree: false
        }
            
            })    
        
            .when('/categories', {
                controller: 'categoryList',
                templateUrl: 'views/category/list.html',
              access: {
            //définir si il est autorisé ou pas
                isFree: false
        }
            
            })
            .when('/categories/new', {
                controller: 'categoryCreate',
                templateUrl: 'views/category/create.html',
              access: {
            //définir si il est autorisé ou pas
                isFree: false
        }
            
            })
    }
);