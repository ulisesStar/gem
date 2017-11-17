var app = angular.module('myapp');

app.controller('albumCtrl', function($scope, $rootScope, $state, $stateParams, Niveles, $sce, $mdExpansionPanel, $compile, Eventos, Imagenes) {

    Eventos.one($stateParams.id).then(res => {

        $scope.evento = res.data;
        $scope.$digest();

        console.log(res.data)
    })


    Imagenes.obtenerConEvento($stateParams.id).then(res => {

        $scope.album = res.data;
        $scope.$digest();
		console.log(res.data)

    })

});
