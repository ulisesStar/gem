app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
        debug: false,
        modules: [
            {
                name: 'ozMainHome',
                files: ['js/main/frags/home.js']
            },
            {
				name: 'ozMainNivel',
				files: ['js/main/frags/nivel.js']
			},
            {
				name: 'ozMainDeporte',
				files: ['js/main/frags/deporte.js']
			},
            {
				name: 'ozMainInscripciones',
				files: ['js/main/frags/inscripciones.js']
			},
			{
				name: 'ozAdminHome',
				files: ['js/admin/frags/home.js']
			},
			{
				name: 'ozAdminNivel',
				files: ['js/admin/frags/nivel.js']
			},
            {
                name: 'ozAdminInfoNivel',
                files: ['js/admin/frags/infoNivel.js']
            },
            {
                name: 'ozAdminNuevoNivel',
                files: ['js/admin/frags/nuevoNivel.js']
            },
			{
				name: 'ozAdminEventos',
				files: ['js/admin/frags/eventos.js']
			},
            {
				name: 'ozAdminInfoEventos',
				files: ['js/admin/frags/infoEventos.js']
			},
			{
				name: 'ozAdminElementos',
				files: ['js/admin/frags/elementos.js']
			},
			{
				name: 'ozAdminAlbum',
				files: ['js/admin/frags/album.js']
			},
			{
				name: 'ozAdminFotos',
				files: ['js/admin/frags/fotos.js']
			},
            {
				name: 'ozAdminContacto',
				files: ['js/admin/frags/contacto.js']
			},
			{
				name: 'ozUserHome',
				files: ['js/user/frags/home.js']
			},
            {
				name: 'ozVidaEstudiantil',
				files: ['js/main/frags/vidaestudiantil.js']
			},
            {
				name: 'ozAcceso',
				files: ['js/main/frags/acceso.js']
			},
			{
				name: 'ozAlbum',
				files: ['js/main/frags/album.js']
			}
        ]
    });
}]);
