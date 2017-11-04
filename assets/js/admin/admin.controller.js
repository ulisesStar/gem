app.controller('adminCtrl', function ($scope, $rootScope, $http, mdDialog, $timeout, $mdSidenav) {

    $scope.productos = [];

    $scope.mdDialogTarjeta = function(data){
        mdDialog.mostrardialog('nuevoproducto', 'adminCtrl', $scope.customFullscreen);
    }

    $scope.secciones = [
        {
            nombre: 'Home',
            icon: 'home',
            state: 'home'
        },
        {
            nombre: 'Niveles',
            icon: 'school',
            state: 'niveles'
        },
        {
            nombre: 'Eventos',
            icon: 'event',
            state: 'eventos'
        }
    ];

    $scope.Dropify = function() {

        $('.dropify').dropify({
            messages: {
                default: 'Agregar',
                replace: 'Reemplazar',
                remove: 'Eliminar',
                error: 'Error'
            }
        });

        $('.dropify').on('change', function() {

            var input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    // bind new Image to Component
                    $scope.$apply(function() {
                        $scope.inputImage = e.target.result;
                    });
                }

                reader.readAsDataURL(input.files[0]);
            }
        });

    };

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.obtenerProductos = function(data){
        Producto.obtenerProductos().then(function(data){
            $scope.productos = data;
            console.log($scope.productos)
        })
    }

    $scope.crearProducto = function(data){
        Producto.crearProducto(data, function(data){
            let producto = data.data
            console.log(producto);
            $scope.productos.push(producto);

        })
    }

});
