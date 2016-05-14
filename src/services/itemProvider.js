'use strict';

/*
var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
];*/

app.service('itemProvider', function ($firebase) {
    
    //instantiation de notre base
    var ref = new Firebase("https://blistering-torch-5921.firebaseio.com/items");
    
    //lien de synchronisation
    var sync = $firebase(ref);
    
    //Seulement la première fois lors de l'insertion des données (type + data a envoyer)
    //sync.$set('items', items);
    
    //Ajouter des données à notre collection
    var items = sync.$asArray();
    
    this.getItems = function () {
        return items;
    }

    this.create = function (item) {
        //items correspond desormais à un Array qui est synchronisé avec Firebase
        items.$add(item);
        //Travail sur la collection en LIVE
        
    }
    
      this.remove = function (item) {
        //On récupère notre collection syncrhonisée
        items.$remove(item);
    }
      //pour qu'il sache quel item à mettre à jour
        this.update = function (item) {
        //items correspond desormais à un Array qui est synchronisé avec Firebase
        items.$save(item);
        //Travail sur la collection en LIVE
        
    }
});