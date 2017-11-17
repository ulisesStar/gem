var app = angular.module('myapp');

app.controller('infoNivelCtrl', function($scope, $state, $stateParams, $mdDialog, $window, Niveles, Elementos, alertas) {

    var idNivel = $stateParams.idNivel;

    console.log(idNivel);

    Niveles.one(idNivel).then(function(res) {
        $scope.nivel = res.data;
        $scope.$digest();
        console.log($scope.nivel);

    })

    Elementos.obtenerConNivel(idNivel).then(function(res){
        $scope.elementos = res.data;
        $scope.$digest();
    })

    $scope.editarNivel = function(nivel) {
        Niveles.editar(nivel).then(function(res) {
            $scope.niveles = res.data;
            $scope.$digest();
            alertas.mostrarToastEstandar("Elemento creado");
            $window.location.reload();
        })
    }

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

    $scope.seleccionar = function(x){
        switch (x) {
            case 'logo':

                $scope.opciones = {
                    tipo : x,
                    boundry : { w: 350, h: 350 },
                    viewport : { w: 570, h: 696}
                }

                break;
            case 'portada1':

                $scope.opciones = {
                    tipo : x,
                    boundry : { w: 1024, h: 350 },
                    viewport : { w: 1024, h: 370 },
                }

                break;
            case 'portada2':

                $scope.opciones = {
                    tipo : x,
                    boundry : { w: 2362, h: 350 },
                    viewport : { w: 2362, h: 521}
                }

                break;
            default:
        }
    }

    $scope.crearImagen = function(foto){

        console.log(foto)

        switch ($scope.opciones.tipo) {
            case 'logo':

                foto.idNivel = idNivel;
                Niveles.crearlogo(foto).then(res => {
                    console.log(res.data)
                    $window.location.reload();
                    alertas.mostrarToastEstandar("Logo creado");
                })

                break;
            case 'portada1':

                foto.idNivel = idNivel;
                foto.tipo = 1;
                Niveles.crearportada(foto).then(res => {
                    console.log(res.data)
                    $window.location.reload();
                    alertas.mostrarToastEstandar("Portada 1 creada");
                })
                break;
            case 'portada2':

                foto.idNivel = idNivel;
                foto.tipo = 2;
                Niveles.crearportada(foto).then(res => {
                    console.log(res.data)
                    $window.location.reload();
                    alertas.mostrarToastEstandar("Portada 2 creada");
                })
                break;
            default:
        }
    }

});
