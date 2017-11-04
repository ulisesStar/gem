var db = require('../relations');
var portadas = db.portadas;
var logo = db.logo;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    portadas.create(data).then(function(portadas) {
        res.status(200).jsonp(portadas);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    portadas.findById(id).then(function(portadas) {
        portadas.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    portadas.update(data, {
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
        portadas.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        portadas.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.portadaXnivel = function(req, res, next) {

    var id = req.params.id;

    portadas.findAll(
        {
            where : {
                idNivel : id
            }
        }).then(function(result) {
        res.status(200).jsonp(result);
    });
};


ex.logo = function(req, res, next) {

    var data = req.body;

    console.log(data);

    logo.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};
