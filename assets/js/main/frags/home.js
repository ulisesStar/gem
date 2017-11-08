var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Niveles) {


    $scope.loadingniveles = true;

    todotrue();

    $scope.medida = {
        col: 1,
        row: 1
    }

    Niveles.obtener().then(function(res){

        $scope.niveles = res.data;

        todotrue();

        $scope.loadingniveles = false;
        console.log($scope.niveles)
        $scope.$digest();

    })

    function todotrue(){
        _.forEach($scope.niveles, function(n, key){
            console.log(n);

            n.activo = true;
        });
    }

    $scope.selecionar = function(nivel){

        $state.go('home.nivel', {id: nivel.id})


        _.forEach($scope.niveles, function(n, key){
            console.log(n);
            if(n.id !== nivel.id){

                n.activo = false;

            }

            $scope.medida = {
                col: 3,
                row: 2
            }
        });

        $scope.$digest();

    }



});
