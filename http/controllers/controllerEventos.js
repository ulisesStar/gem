var db = require('../relations');
var eventos = db.eventos;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    eventos.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    eventos.findById(id).then(function(eventos) {
        eventos.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    eventos.update(data, {
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
        eventos.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        eventos.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.crearConNivel = function(req, res, next) {
    var id = req.params.idNivel;
    var data = req.body;

    eventos.create(data).then(function(result) {
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

    eventos.findAll(busca).then(function(eventos) {
        res.status(200).jsonp(eventos);
    });

};
