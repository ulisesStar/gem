var app = angular.module('myapp');

app.controller('nivelCtrl', function($scope, $rootScope, $state, $stateParams, Niveles, $sce, $mdExpansionPanel, $compile) {

    console.log($stateParams)


    console.log($scope.niveles)

    $scope.loading = true;
    $scope.portadas = false;
    $scope.nivel = false;

    if($stateParams.id === null){
        $state.go('home')
    }else{

        var id = $stateParams.id;

        Niveles.one(id).then(res => {

            // console.log(res.data);
            $scope.nivel = res.data;
            $scope.$digest();

        })

        Niveles.portadas(id).then(res => {
            $scope.portadas = res.data;
            // console.log(res.data);
            $scope.$digest();
        })
    }

    $mdExpansionPanel().waitFor('0').then(function (instance) {
      instance.expand();
    });

    $('li').html($compile('<div ng-attr-tooltip="test">Cancel</div>')($scope))

    // $("li").html($compile("<div ng-attr-tooltip="test">Cancel</div>")(scope));


});
