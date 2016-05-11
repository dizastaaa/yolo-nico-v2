'use strict';


//Modèle de données
var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1},
];


app.service('itemProvider', function () {
    this.getItems = function () {
        
        return items;
        //Possibilité de récupération via BD ou via un Service ($http) ou API
    }
    
  //Ajout des items
    this.create = function(item) {
        //Récupération BD
        items.push(item);
        
        return items;
    }
    
    //Suppression
    this.delete = function(item) {
        items.delete(item);
        
        return items;
    }
    
});