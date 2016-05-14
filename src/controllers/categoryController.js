'use strict';

app
    .controller('categoryIndex', function ($scope) {
    })

    .controller('categoryList', function ($scope, categoryProvider) {
        $scope.categories = categoryProvider.getCategories();
        
    //On ajoute une fonction pour supprimer une catégorie
       $scope.remove = function (category) {
          categoryProvider.remove(category);
        }
    
    })

    .controller('categoryCreate', function ($scope, categoryProvider) {
        $scope.categories = categoryProvider.getCategories();

        $scope.createCategory = function (category) {
        categoryProvider.create(category);
        }
    })

    .controller('categoryRemove', function ($scope) {
    })
;