var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $transitions, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Niveles, $location, anchorSmoothScroll, $timeout) {


    $scope.loadingniveles = true;

    // console.log($state.current.name);

    $transitions.onSuccess({}, trans => {

        $state.current.name === 'home' ? (
            esHome(),
            medidaEstandar()
        ): (
            console.log('No estoy en home')
        )

    });

    var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
    ];

    // $state.includes('deporte') ? (
    //     console.log('Estoy en deporte')
    // ): (
    //     console.log('No estoy en deporte')
    // )
    //
    // $state.includes('nivel') ? (
    //     console.log('Estoy en nivel')
    //
    // ): (
    //     console.log('No estoy en nivel')
    // )

    $state.is('home') ? (

        esHome(),
        medidaEstandar(),
        console.log('Estoy en home')

    ): (

        esNivel(),
        console.log('Estoy en nivel')

    )

    function esHome(){

        Niveles.obtener().then(function(res){
            $scope.niveles = res.data;
            todotrue();
            $scope.loadingniveles = false;
            $scope.$digest();

        })

    }

    function esNivel(){

        console.log('Estoy obteniendo el nivel')

        $scope.niveles = []

        Niveles.one($stateParams.id).then(function(res){
            res.data.activo = true;
            $scope.niveles.push(res.data)
            todofalseExcepto(res.data.id)
            $scope.loadingniveles = false;
            console.log($scope.niveles)
            $scope.$digest();

        })

        $scope.medida = {
            col: 3,
            row: 2,
            nivel: true
        }

    }

    // if($state.current.name === 'home.nivel'){
    //
    //     console.log($stateParams)
    //     todofalseExcepto($stateParams.id)
    //
    // }

    function medidaEstandar(){
        $scope.medida = {
            col: 1,
            row: 1,
            nivel: false
        }
    }


    function todotrue(){
        _.forEach($scope.niveles, function(n, key){
            // console.log(n);
            n.activo = true;
        });
    }

    function todofalseExcepto(nivel){

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
