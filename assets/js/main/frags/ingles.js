var app = angular.module('myapp');

app.controller('inglesCtrl', function($scope, $rootScope, $state, $stateParams, Niveles, alertas, $sce, $mdExpansionPanel, $compile, Contactos) {

    $scope.listo = false;
    $scope.nuevoContacto = function(contacto){
        contacto.idNivel = 94;
        Contactos.crear(contacto).then(res => {
            alertas.mostrarToastEstandar("Mensaje enviado");
            $scope.listo = true;
			delete $scope.contacto
        })
    }

    Niveles.one(94).then(res => {

        console.log(res.data);
        $scope.nivel = res.data;
        $scope.$digest();

    })

});
