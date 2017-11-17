var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, $rootScope, $http, mdDialog, Contactos) {
    Contactos.obtener().then(res => {
    $scope.contactos = res.data;
    $scope.$digest();
    console.log(res.data)
})

});
