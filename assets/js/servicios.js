app.service('Usuario', function() {

    this.obtener = function(id) { return axios('/data/usuario/' + id) }

});

app.service('Niveles', function($http, alertas, $q) {
    this.obtener = function() { return axios('/data/niveles') }
    this.one = function(id) { return axios('/data/niveles/' + id) }
    this.crear = function(nivel) { return axios.post('/data/niveles', nivel) }
    this.editar = function(nivel) { return axios.put('/data/niveles/' + nivel.id, nivel) }
    this.eliminar = function(id) { return axios.delete('/data/niveles/' + id) }

    this.crearlogo = function(logo) { return axios.post('/data/logo', logo) }
    this.crearportada = function(portada) { return axios.post('/data/portadas', portada) }
    this.portadas = function(id) { return axios('/data/portadaXnivel/' + id) }

});

app.service('Elementos', function($http, alertas, $q) {
    this.obtenerConNivel = function(id) { return axios('/data/elementosConNivel/' + id) }
    this.one = function(id) { return axios('/data/elementos/' + id) }
    this.crearConNivel = function(id,elemento) { return axios.post('/data/elementosConNivel/' + id, elemento) }
    this.editar = function(elemento) { return axios.put('/data/elementos/' + elemento.id, elemento) }
    this.eliminar = function(id) { return axios.delete('/data/elementos/' + id) }
});

app.service('Eventos', function($http, alertas, $q) {
    this.obtener = function() { return axios('/data/eventos') }
    this.obtenerConNivel = function(id) { return axios('/data/eventosConNivel/' + id) }
    this.one = function(id) { return axios('/data/eventos/' + id) }
    this.crearConNivel = function(evento) { return axios.post('/data/eventosConNivel/' + evento.idNivel, evento) }
    this.editar = function(evento) { return axios.put('/data/eventos/' + evento.id, evento) }
    this.eliminar = function(id) { return axios.delete('/data/eventos/' + id) }
});

app.service('Imagenes', function($http, alertas, $q) {
    this.obtener = function() { return axios('/data/imagenes') }
    this.obtenerConEvento = function(id) { return axios('/data/imagenesConEvento/' + id) }
    this.one = function(id) { return axios('/data/imagenes/' + id) }
    this.crearConEvento = function(id, foto) { return axios.post('/data/imagenesConEvento/' + id, foto) }
    this.editar = function(imagen) { return axios.put('/data/imagenes/' + imagen.id, imagen) }
    this.eliminar = function(id) { return axios.delete('/data/imagenes/' + id) }
});

app.service('Contactos', function($http, alertas, $q) {
    this.obtener = function() { return axios('/data/contactos') }
    this.one = function(id) { return axios('/data/contactos/' + id) }
    this.crear = function(contacto) { return axios.post('/data/contactos', contacto) }
    this.eliminar = function(id) { return axios.delete('/data/contactos/' + id) }
});
