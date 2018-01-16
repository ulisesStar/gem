var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Contactos = sequelize.define('contactos', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        email: Sequelize.STRING,
        mensaje: Sequelize.TEXT,
        telefono: Sequelize.STRING
    })

    return Contactos;

};

module.exports = ex;
