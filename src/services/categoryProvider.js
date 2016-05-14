'use strict';

/*
var categories = [
    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'musiques'}
];*/

app.service('categoryProvider', function ($firebase) {
    
    var ref = new Firebase("https://blistering-torch-5921.firebaseio.com/categories");
    
    var sync = $firebase(ref);
    
    //Une fois stockée plus besoin
    //sync.$set('categories', categories);
    
    var categories = sync.$asArray()
    
    
    this.getCategories = function () {
       
        //On ne retourne pas les categorie mais les informations de notre point d'entrée (url plus haut)
        //Pour nous retoruner la collection sous forme de tableau provenant du point d'entrée
        //On l'affiche dans la vue via le decorator
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.$add(category);
    }
    
    //Supprimer des données CRUD
    //nouvelle méthode this.remove
    //qui est une fonciton dans laquelle on va passer l'objet à supprimer
    this.remove = function (category) {
        //On récupère notre collection syncrhonisée
        categories.$remove(category);
    }
});