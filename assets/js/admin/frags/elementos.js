var app = angular.module('myapp');

app.controller('elementosCtrl', function($scope, $stateParams, alertas, $state, $rootScope, $http, mdDialog, $mdDialog, Elementos) {



    var idNivel = $stateParams.idNivel;


    Elementos.obtenerConNivel(idNivel).then(function(res){
        $scope.elementos =  res.data;
        $scope.$digest();
    })
    $scope.limpiar = function(){
        $scope.aparecer = false;
        delete $scope.elemento;
    }

    $scope.focusElemento = function(elemento){
            $scope.aparecer = true;
            elemento ? ($scope.elemento = elemento) : ($scope.elemento = {});
        }

    $scope.submitElemento = function(elemento){
        elemento.idNivel = idNivel;
        elemento.id === undefined ? (
            Elementos.crearConNivel(idNivel, elemento).then(res => {
                $scope.elementos.push(res.data.nombre);
                console.log(res.data);
                $scope.$digest();
                $scope.aparecer = false;
                alertas.mostrarToastEstandar("Elemento creado");
            })
        ) : (
            Elementos.editar(elemento).then(res => {
                //$scope.elementos.push(res.data.nombre)
                console.log(res.data);
                alertas.mostrarToastEstandar("Elemento editado");
                delete $scope.elemento;
                $scope.aparecer = false;
                $scope.$digest();
            })
        );
    }

    $scope.eliminarElemento = function(elemento, $index) {

        ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar este Elemento?').textContent('Para eliminar un elemento dale en Aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

        $mdDialog.show(ventana).then(function() {

            Elementos.eliminar(elemento.id).then(function(data) {
                $scope.elementos.splice($index,1);
                $scope.$digest();
            })

        }, function() {});

    }

});
