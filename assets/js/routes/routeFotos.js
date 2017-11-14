var express = require('express');
var routeFotos = express.Router();

var x = require("../controllers/controllerFotos");

routeFotos.route('/data/fotos')
        .get(x.read)
        .post(x.create);

routeFotos.route('/data/fotos/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeFotos;
