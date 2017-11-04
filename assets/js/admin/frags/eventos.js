var app = angular.module('myapp');

app.controller('eventosCtrl', function($scope, $rootScope, $http, alertas, $mdDialog, Eventos, Imagenes) {
    $scope.section = 'Eventos';

	Eventos.obtener().then(function(res){
		$scope.eventos = res.data;
		$scope.$digest();
	})

    $scope.EventoDialog = function(ev) {
        $mdDialog.show({
            templateUrl: '/partials/nuevoEvento',
            parent: angular.element(document.body),
            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, Eventos, Niveles, alertas, $state){
                Niveles.obtener().then(res => {$scope.niveles = res.data})

                $scope.submitEvento = function(evento){
                    Eventos.crearConNivel(evento).then(res => {
                        console.log(res.data);
                        $scope.$digest();
                        alertas.mostrarToastEstandar("Evento creado");
                        $state.go('evento', { idEvento : res.data})
                        $mdDialog.hide();

                    })
                }

                $scope.close = function() {
                    $mdDialog.hide();
                }
            }
        })
    };

    $scope.eliminarEvento = function(evento, $index) {

        ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar este Evento?').textContent('Para eliminar un evento dale en Aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

        $mdDialog.show(ventana).then(function() {

            Eventos.eliminar(evento.id).then(function(data) {
                $scope.eventos.splice($index,1);
                $scope.$digest();
            })

        }, function() {});

    }

});
