var app = angular.module('myapp');

app.controller('nivelCtrl', function($scope, $rootScope, $http, mdDialog, Niveles) {

    Niveles.obtener().then(function(res){
        console.log(res.data);
        $scope.niveles = res.data;
        $scope.$digest();
    })
});
