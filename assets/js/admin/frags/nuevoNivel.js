var app = angular.module('myapp');

app.controller('nuevoNivelCtrl', function($scope, $rootScope, $state, $http, mdDialog, Niveles, alertas) {

    $scope.nuevoNivel = function(nivel){
        console.log(nivel);
        Niveles.crear(nivel).then(function(res){
            $scope.niveles = (res.data);
            alertas.mostrarToastEstandar("Agregado correctamente");
            delete $scope.inputImage;
            $scope.$digest();
            $state.go('elementos', {'idNivel': res.data.id});
        })
    }
});
