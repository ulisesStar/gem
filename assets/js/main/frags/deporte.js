var app = angular.module('myapp');

app.controller('deporteCtrl', function($scope, $rootScope, $state, $stateParams, Niveles, $sce, $mdExpansionPanel, $compile, Eventos) {

    if($stateParams.id === null){
        $state.go('home')
    }else{

    	Eventos.obtener().then(res => {
            $scope.eventos = res.data;
            $scope.$digest();
        })

    }

    $scope.irAlbum = function(album){


        $state.go('home.deporte.album', {id: album.id})

    }

});
