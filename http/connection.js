var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('gem', 'root', 'simple', {
    host: '35.237.80.12',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.sync()
    .then(function() {
        console.log('Connecion realizada');
    })
    .catch(function(err) {
        console.log('No se puede conectar a la bd:', err);
    }
);

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

//mysql://b5826b300e7f61:bf5acbf3@us-cdbr-iron-east-05.cleardb.net/heroku_15c29aba6a998dc?reconnect=true
