var express = require('express');
var routeElementos = express.Router();

var x = require("../controllers/controllerElementos");

routeElementos.route('/data/elementos')
        .get(x.read)
        .post(x.create);

routeElementos.route('/data/elementosConNivel/:idNivel')
        .get(x.obtenerConNivel)
        .post(x.crearConNivel);

routeElementos.route('/data/elementos/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeElementos;
