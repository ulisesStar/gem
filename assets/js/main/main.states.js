app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {

        function template(url, template, controller, oz, params) {
    		let obj = {
    			url: url,
    			params: params,
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

        function pequenin(url, template) {
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
        .state('home', template('/', '/main/home', 'homeCtrl', 'ozMainHome'))
        .state('conocenos',pequenin('/conocenos', '/main/conocenos'))
        .state('inscripciones', template('/inscripciones', '/main/inscripciones', 'inscripcionesCtrl', 'ozMainInscripciones'))
        .state('ingles', template('/ingles', '/main/ingles', 'inglesCtrl', 'ozMainIngles'))
        .state('home.nivel', template('nivel/:id', '/main/nivel', 'nivelCtrl', 'ozMainNivel', { 'id' : null}))
        .state('home.deporte', template('deporte/:id', '/main/deporte', 'deporteCtrl', 'ozMainDeporte', { 'id' : null}))

		.state('home.deporte.album', template('/album/:id', '/main/album', 'albumCtrl', 'ozAlbum', { 'id' : null}))

        .state('vidaestudiantil', template('/vidaestudiantil', '/main/vidaestudiantil', 'vidaCtrl', 'ozVidaEstudiantil'))

        .state('acceso', template('/acceso', '/main/acceso', 'accesoCtrl', 'ozAcceso'))
    }
]);
