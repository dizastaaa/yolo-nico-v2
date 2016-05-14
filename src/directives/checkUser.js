'use strict';

//Définition des injections et des variables qui seront utilisés avec cette fonction
app.directive('checkUser', ['$rootScope', '$location', 'userProvider', function ($root, $location, userProvider) {
    
    //Cette directive retourne un lien qui sera lu lorsque on appel cette directive
    return {
        link: function () {
            //On se cable sur root qui est le rootscope et sur un évènement on
            //sur cet évènement on va vérifier un évènement particulier
            //doc angular tous les évènement disponibles
            $root.$on('$routeChangeStart', function (event, currRoute) {
                //ici le routechangedstart dès qu'une route change on a accès à cette route et à ses information
                //ainsi on peut travailler avec
                
                
                //On a besoin déja de récupéré la session utilisateur
                var auth = userProvider.getAuth();//le get auth récupère l'auth dans l'userProvider
                
                //vérification si on a l'acess sur la route
                if (currRoute.access && !currRoute.access.isFree && !auth.user) {
                    //si c'est le cas redirection vers la page / (la route par défaut, racine)
                    $location.url('/');
                    //désormais la directive nous permet de récupéré un évènement (le chgt de route)
                    //qui verifiera si ce changement de route à un paramètre isFree
                }
                
                
            });
        }
    };
        
    
}]);