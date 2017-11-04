var app = angular.module('myapp');

app.controller('inscripcionesCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Niveles) {

    Niveles.obtener().then(function(res){
        $scope.niveles = res.data;
        $scope.niveles.pop();
        console.log($scope.niveles)
        $scope.$digest();

    })

});
