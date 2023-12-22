const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Arbol = require('../models/arbol.model')

const Ubicacion = sequelize.define('ubicaciones', {
  ubicacion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  latitud: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  longitud: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
},
{
  schema: 'roket',
  tableName: 'ubicaciones',
  timestamps: false
});

Arbol.belongsTo(Ubicacion, { as: 'ubicacion', foreignKey: 'ubicacion_id' });

module.exports = Ubicacion;