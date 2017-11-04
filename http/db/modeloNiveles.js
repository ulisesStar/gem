var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Niveles = sequelize.define('niveles', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        // logo: {
        //     type: Sequelize.BLOB('medium'),
        //     get() {
        //         var imagenBin = this.getDataValue('logo');
        //         var Imagenes = new Buffer(imagenBin).toString('ascii');
        //         return Imagenes
        //     },
        // },
        direccion: Sequelize.STRING,
        inscripcion: Sequelize.FLOAT,
        colegiatura: Sequelize.FLOAT,
        colorbajo: Sequelize.STRING,
        coloralto: Sequelize.STRING,
    })

    return Niveles;

};

module.exports = ex;
