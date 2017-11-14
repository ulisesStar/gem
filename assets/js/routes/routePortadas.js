var express = require('express');
var routePortadas = express.Router();

var x = require("../controllers/controllerPortadas");

routePortadas.route('/data/portadas')
        .get(x.read)
        .post(x.create);

routePortadas.route('/data/portadas/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

routePortadas.route('/data/logo')
        .post(x.logo);


routePortadas.route('/data/portadaXnivel/:id')
        .get(x.portadaXnivel);

module.exports = routePortadas;
