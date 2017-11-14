var express = require('express');
var routeEventos = express.Router();

var x = require("../controllers/controllerEventos");

routeEventos.route('/data/eventos')
        .get(x.read)
        .post(x.create);

routeEventos.route('/data/eventosConNivel/:idNivel')
        .get(x.obtenerConNivel)
        .post(x.crearConNivel);

routeEventos.route('/data/eventos/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeEventos;
