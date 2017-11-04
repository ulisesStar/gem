var app = angular.module('myapp');

app.controller('infoEventosCtrl', function($scope, $rootScope, $stateParams, $http, alertas, $mdDialog, Eventos, Niveles, Imagenes) {
    $scope.section = 'Eventos';
    var idEvento = $stateParams.idEvento;

    console.log(idEvento);
    Niveles.obtener().then(function(res){
        $scope.niveles = res.data;
        $scope.$digest();
    })

    Eventos.one(idEvento).then(function(res) {
        $scope.evento = res.data;
        $scope.$digest();

    })

    Imagenes.obtenerConEvento(idEvento).then(function(res){
        $scope.imagenes = res.data;
        $scope.$digest();
    })

    $scope.editarEvento = function(evento){
        Eventos.editar(evento).then(function(res){
            $scope.eventos = res.data;
            $scope.$digest();
            alertas.mostrarToastEstandar("Evento editado correctamente");
        })
    }

    $scope.crearImagen = function(foto){
        foto.idEvento = idEvento;
        Imagenes.crearConEvento(idEvento, foto).then(function(res){
            $scope.imagenes.push(res.data.imagen);
            $scope.$digest();
            alertas.mostrarToastEstandar("Imagen Creada");
        })
    }

    $scope.eliminarImagen = function($index, id) {

        ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar la Imagen?').textContent('Para eliminar una imagen dale en aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

        $mdDialog.show(ventana).then(function() {

            Imagenes.eliminar(id).then(function(data) {
                $scope.imagenes.splice($index,1);
                $scope.$digest();
            })

        }, function() {});

    }
});
