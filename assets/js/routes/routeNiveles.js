var express = require('express');
var routeNiveles = express.Router();

var x = require("../controllers/controllerNiveles");

routeNiveles.route('/data/niveles')
        .get(x.read)
        .post(x.create);

routeNiveles.route('/data/niveles/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeNiveles;
