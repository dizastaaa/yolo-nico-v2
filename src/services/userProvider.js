'use strict';

app.service('userProvider', function ($firebaseSimpleLogin) {

    //Injection de la ref
    var ref = new Firebase("https://blistering-torch-5921.firebaseio.com/items");
    
    //variable d'authentification
    var auth = $firebaseSimpleLogin(ref);
    
    //appel de l'auth
    //puis on commente pour ne pas le créé plusieurs fois
    //auth.$createUser("toto@collectify.io", "toto");
    //console.log('create');
    
    this.create = function (user) {
        auth.$createUser(user.email, user.password);
    }
    this.auth = function (user) {
        //var authSuccess =
        auth.$login('password', {
            email: user.email,
            password: user.password
        });
        
        //console.log('authSuccess');
        return auth
    }
    
    //Création d'une méthode pour récupéréer l'utilisateur et le placé dans le scope de l'interface
    this.getAuth = function () {
        return auth;
    }
});