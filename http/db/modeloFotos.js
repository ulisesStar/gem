var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Fotos = sequelize.define('fotos', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        foto: {
            type: Sequelize.BLOB('medium'),
            get() {
                var imagenBin = this.getDataValue('foto');
                var Imagenes = new Buffer(imagenBin).toString('ascii');
                return Imagenes
            },
        },
    })

    return Fotos;

};

module.exports = ex;
