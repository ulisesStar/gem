
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var usuario = require('./db/modeloUsuario')(conector);
var elementos = require('./db/modeloElementos')(conector);
var eventos = require('./db/modeloEventos')(conector);
var imagenes = require('./db/modeloImagenes')(conector);
var niveles = require('./db/modeloNiveles')(conector);
var album = require('./db/modeloAlbum')(conector);
var fotos = require('./db/modeloFotos')(conector);
var portadas = require('./db/modeloPortadas')(conector);
var logo = require('./db/modeloLogo')(conector);
var contactos = require('./db/modeloContactos')(conector);



//- Relations

niveles.hasMany(eventos , {foreignKey: 'idNivel'});
eventos.belongsTo(niveles, {foreignKey: 'idNivel'});

niveles.hasMany(contactos , {foreignKey: 'idNivel'});
contactos.belongsTo(niveles, {foreignKey: 'idNivel'});

elementos.belongsTo(niveles, {foreignKey: 'idNivel'});
niveles.hasMany(elementos, {foreignKey: 'idNivel'});

portadas.belongsTo(niveles, {foreignKey: 'idNivel'});
niveles.hasMany(portadas, {foreignKey: 'idNivel'});

imagenes.belongsTo(eventos , {foreignKey: 'idEvento'});
eventos.hasMany(imagenes , {foreignKey: 'idEvento'});

logo.belongsTo(niveles, {foreignKey: 'idNivel'});
niveles.hasOne(logo, {foreignKey: 'idNivel'});

module.exports.usuario = usuario;
module.exports.elementos = elementos;
module.exports.eventos = eventos;
module.exports.imagenes = imagenes;
module.exports.niveles = niveles;
module.exports.album = album;
module.exports.fotos = fotos;
module.exports.portadas = portadas;
module.exports.logo = logo;
module.exports.contactos = contactos;
