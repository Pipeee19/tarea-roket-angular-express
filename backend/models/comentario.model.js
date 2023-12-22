const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Comentario = sequelize.define('arboles', {
  /*com_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },*/
  arbol_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comentario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postulante_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
},
{
  schema: 'roket',
  tableName: 'comentarios',
  timestamps: false
});

module.exports = Comentario;