var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $transitions, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Niveles, $location, anchorSmoothScroll, $timeout) {


    $scope.loadingniveles = true;

    todotrue();

    console.log($state.current.name);

    $transitions.onSuccess({}, trans => {

        $state.current.name === 'home' ? (
            medidaEstandar(),
            todotrue()
        ): (

            console.log('estoy en home nivel')

        )

        // if($state.is('home')){
        //     medidaEstandar()
        //     todotrue()
        // }
        //
        // if($state.is('home.nivel')){
        //
        //     console.log('estoy en home nivel')
        //
        // }

        // else{
        //     todofalseExcepto($stateParams.id)
        // }

        // if($state.is('home.nivel')){
        //     console.log($stateParams)
        // }

    });

    if($state.current.name === 'home.nivel'){

        console.log($stateParams)
        todofalseExcepto($stateParams.id)
    }

    medidaEstandar()

    function medidaEstandar(){
        $scope.medida = {
            col: 1,
            row: 1,
            nivel: false
        }
    }

    function obtenerNiveles(){

    }

    Niveles.obtener().then(function(res){
        $scope.niveles = res.data;
        todotrue();
        $scope.loadingniveles = false;
        $scope.$digest();

    })

    function todotrue(){
        _.forEach($scope.niveles, function(n, key){
            // console.log(n);
            n.activo = true;
        });
    }

    function todofalseExcepto(nivel){

        console.log('Se ejecuta la funcion ')

        let x = 0

        _.forEach($scope.niveles, function(n, key){
            // console.log(n);
            if(n.id !== nivel){

                n.activo = false;
            }

            x++

            if(x === $scope.niveles.length){

                $timeout( function(){
                    $scope.medida = {
                        col: 3,
                        row: 2,
                        nivel: true
                    }
               }, 1000 );
            }
        });

    }

    $scope.selecionar = function(nivel){
        if (nivel.id === 93)
        {
            console.log('Actividad Deportiva"')
            $state.go('home.deporte', {id: nivel.id})
            todofalseExcepto(nivel.id)
        }
        else
        {
            $state.go('home.nivel', {id: nivel.id})
            todofalseExcepto(nivel.id)
        }
    }

    $scope.irNivel = function(){
        $location.hash('cotizador');
        anchorSmoothScroll.scrollTo('nivel');
    }

    // $scope.$watch('niveles', function(newValue, oldValue) {
    //
    //     console.log(oldValue)
    //     console.log(newValue)
    //
    // });



});
