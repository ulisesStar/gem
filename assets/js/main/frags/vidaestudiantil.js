var app = angular.module('myapp');

app.controller('vidaCtrl', function($scope, $rootScope, $state, $stateParams, Niveles, $sce, $mdExpansionPanel, $compile) {

    $scope.events = [
        {
            clase: 'facebook',
            icon: 'fb',
            badgeIconClass: 'glyphicon-check',
            title: 'ATENCIÓN',
            content: 'Si hay algún interesado, aún tenemos un lugar disponible. Informes 215 1398',
            side: 'left',
            imagen: 'https://scontent.fver1-1.fna.fbcdn.net/v/t1.0-9/23244295_1587483107961938_1595132931663415810_n.jpg?oh=9792caee6279ff90c3bd6500f57214b2&oe=5A6F1B57'
        },{
            clase: 'facebook',
            icon: 'fb',
            badgeIconClass: 'glyphicon-check',
            title: 'ATENCIÓN',
            content: 'Si hay algún interesado, aún tenemos un lugar disponible. Informes 215 1398',
            side: 'right',
            imagen: 'https://scontent.fver1-1.fna.fbcdn.net/v/t1.0-9/23244268_1589124424464473_1849801953560128363_n.jpg?oh=6dad443b05b8865cf32af6d4ee7b3a57&oe=5AA88B5D'
        }, {
            clase: 'evento',
            icon: 'date_range',
            title: 'Esto es un evento creado en la plataforma',
            content: 'Aquí se mostraran los eventos de esta plataforma',
            side: 'left'
        }
    ];
});
