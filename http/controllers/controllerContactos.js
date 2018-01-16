var db = require('../relations');
var contactos = db.contactos;
var niveles = db.niveles;

var api_key = 'key-80db53ef8cec14e7757d27d77cf4ab55';
var domain = 'grupoeducativomadero.mx';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var ex = module.exports = {};

 ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    contactos.create(data).then(function(result){



            var mail = {
                from: 'Informes <postmaster@grupoeducativomadero.mx>',
                subject: 'Esta persona te quiere contactar',
                to: 'relacionespublicasgem@gmail.com' ,
                html:
                    '<p>Tienes un nuevo contacto, Estos son sus datos: </p>' +
                    '<ul>' +
                        '<li> nombre:' + data.nombre  + '</li>' +
                        // '<li> telefono:' + data.telefono  + '</li>' +
                        '<li> email:' + data.email  + '</li>' +
                        '<li> mensaje:' + data.mensaje  + '</li>' +
                    '</ul>'
            };

            mailgun.messages().send(mail, function (error, body) {

            console.log(error);
            });



        res.status(200).jsonp('Se han mandado los correos');

    });

};

//     contactos.create(data).then(function(result) {
//         res.status(200).jsonp(result);
//     });
//
// };


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
        contactos.findAll({
            include:[
                {
                    model:niveles
                }
            ]
        }).then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
