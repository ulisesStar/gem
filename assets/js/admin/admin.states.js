app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', 'USER_ROLES', function ($urlRouterProvider, $stateProvider, USER_ROLES) {

	function complejo(url, template, controller, oz, roles) {
            let obj = {
                url: url,
				data: {
	                authorizedRoles: roles
            	},
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
	.state('home', complejo('/', '/admin/home', 'homeCtrl', 'ozAdminHome', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('niveles', complejo('/niveles', '/admin/nivel', 'nivelCtrl', 'ozAdminNivel', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('nuevoNivel', complejo('/nuevoNivel', '/admin/nuevoNivel', 'nuevoNivelCtrl', 'ozAdminNuevoNivel', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('nivel', complejo('/nivel/:idNivel', '/admin/infoNivel', 'infoNivelCtrl', 'ozAdminInfoNivel', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('eventos', complejo('/eventos', '/admin/eventos', 'eventosCtrl', 'ozAdminEventos', [USER_ROLES.editor]))
	.state('evento', complejo('/evento/:idEvento', '/admin/infoEventos', 'infoEventosCtrl', 'ozAdminInfoEventos', [USER_ROLES.admin, USER_ROLES.editor]))
    .state('elementos', complejo('/elementos/:idNivel', '/admin/elementos', 'elementosCtrl', 'ozAdminElementos', [USER_ROLES.admin, USER_ROLES.editor]))
    .state('album', complejo('/album', '/admin/album', 'albumCtrl', 'ozAdminAlbum', [USER_ROLES.admin, USER_ROLES.editor]))
    .state('fotos', complejo('/fotos', '/admin/fotos', 'fotosCtrl', 'ozAdminFotos', [USER_ROLES.admin, USER_ROLES.editor]))
}]);
