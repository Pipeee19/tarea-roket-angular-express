const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Foto = sequelize.define('fotos', {
  foto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  url_foto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  arbol_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  schema: 'roket',
  tableName: 'fotos',
  timestamps: false
});

module.exports = Foto;