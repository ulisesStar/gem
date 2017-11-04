app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

	function complejo(url, template, controller, oz) {
            let obj = {
                url: url,
                views: {
                    'main': {
                        templateUrl: template,
                        controller: controller + ' as ctrl'
                    }
                },
                resolve: {
                    loadMyCtrl: [
                        '$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load([oz]);
                        }
                    ]
                }
            }
            return obj
        }

        function simple(url, template) {
            let obj = {
                url: url,
                views: {
                    'main': {
                        templateUrl: template
                    }
                }
            }
            return obj
        }

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', complejo('/', '/admin/home', 'homeCtrl', 'ozAdminHome'))
	.state('niveles', complejo('/niveles', '/admin/nivel', 'nivelCtrl', 'ozAdminNivel'))
	.state('nuevoNivel', complejo('/nuevoNivel', '/admin/nuevoNivel', 'nuevoNivelCtrl', 'ozAdminNuevoNivel'))
	.state('nivel', complejo('/nivel/:idNivel', '/admin/infoNivel', 'infoNivelCtrl', 'ozAdminInfoNivel'))
	.state('eventos', complejo('/eventos', '/admin/eventos', 'eventosCtrl', 'ozAdminEventos'))
	.state('evento', complejo('/evento/:idEvento', '/admin/infoEventos', 'infoEventosCtrl', 'ozAdminInfoEventos'))
    .state('elementos', complejo('/elementos/:idNivel', '/admin/elementos', 'elementosCtrl', 'ozAdminElementos'))
    .state('album', complejo('/album', '/admin/album', 'albumCtrl', 'ozAdminAlbum'))
    .state('fotos', complejo('/fotos', '/admin/fotos', 'fotosCtrl', 'ozAdminFotos'))
}]);
