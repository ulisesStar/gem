var db = require('../relations');
var contactos = db.contactos;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    contactos.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    contactos.findById(id).then(function(contactos) {
        contactos.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    contactos.update(data, {
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
        contactos.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        contactos.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
