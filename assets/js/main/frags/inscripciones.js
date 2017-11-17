var app = angular.module('myapp');

app.controller('inscripcionesCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Niveles) {

    Niveles.obtener().then(function(res){
        $scope.niveles = res.data;
        $scope.niveles.pop();
        prueba();
        console.log($scope.niveles)
        $scope.$digest();

    })


    var indice = 1
    $scope.jerarquia = [];
    function prueba(){

        _.times($scope.niveles.length, function(n){

            _.forEach($scope.niveles, function(value) {
                if(value.jerarquia === indice){
                    console.log(value.jerarquia)
                    indice ++;
                    $scope.jerarquia.push(value)
                }
            });
        });
        console.log($scope.jerarquia)
    }
});
