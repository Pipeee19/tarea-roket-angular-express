const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Arbol = sequelize.define('arboles', {
  arbol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_arbol: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ubicacion_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.TIME,
    allowNull: false
  }
},
{
  schema: 'roket',
  tableName: 'arboles',
  timestamps: false
});

module.exports = Arbol;