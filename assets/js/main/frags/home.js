var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Niveles) {


    $scope.loadingniveles = true;

    Niveles.obtener().then(function(res){

        $scope.niveles = res.data;
        $scope.loadingniveles = false;
        console.log(res.data)
        $scope.$digest();

    })

    $scope.selecionar = function(nivel){
        $state.go('home.nivel', {id: nivel.id})

        let indexex  = []

        _.forEach($scope.niveles, function(n, key){
            console.log(n);
            if(n.id !== nivel.id){

                indexex.push(key)

                // $scope.niveles.splice(key, 1)
            }
        });

        console.log(indexex);
        _.pullAt($scope.niveles, indexes)
        $scope.$digest();

    }



});
