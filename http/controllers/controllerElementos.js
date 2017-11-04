var db = require('../relations');
var elementos = db.elementos;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    elementos.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    elementos.findById(id).then(function(elementos) {
        elementos.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    elementos.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        elementos.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        elementos.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.crearConNivel = function(req, res, next) {
    var id = req.params.idNivel;
    var data = req.body;

    elementos.create(data, {idNivel: id}).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.obtenerConNivel = function(req, res, next) {
    var id = req.params.idNivel;

    var busca = {
        where: {
            idNivel: id
        }
    }

    elementos.findAll(busca).then(function(elementos) {
        res.status(200).jsonp(elementos);
    });

};
