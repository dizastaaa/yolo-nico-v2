'use strict';

app
    .controller('index', function ($scope, userProvider) {
    
        $scope.session = userProvider.getAuth();
    
        $scope.auth = function (user) {
            userProvider.auth(user);
            //console.log($scope.session);
        }
        
    })

.controller('indexCreateUser', function ($scope, userProvider) {
        
        $scope.create = function (item) {
            userProvider.create(item);
            
        }
    })
;
