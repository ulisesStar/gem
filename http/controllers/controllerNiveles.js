var db = require('../relations');
var niveles = db.niveles;
var portadas = db.portadas;
var logo = db.logo;
var elementos = db.elementos;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    niveles.create(data).then(function(niveles) {
        res.status(200).jsonp(niveles);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    niveles.findById(id).then(function(niveles) {
        niveles.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    niveles.update(data, {
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
        niveles.findById(id,{
            include: [
                {model: elementos},
                {model: logo}
            ]
        }).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        niveles.findAll({
            include: [
                {model : logo}
            ]
        }).then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
