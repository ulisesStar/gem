var express = require('express');
var routeContactos = express.Router();

var x = require("../controllers/controllerContactos");

routeContactos.route('/data/contactos')
        .get(x.read)
        .post(x.create);

routeContactos.route('/data/contactos/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeContactos;
