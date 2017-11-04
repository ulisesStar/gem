var express = require('express');
var routeALbum = express.Router();

var x = require("../controllers/controllerAlbum");

routeALbum.route('/data/album')
        .get(x.read)
        .post(x.create);

routeALbum.route('/data/album/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeALbum;
