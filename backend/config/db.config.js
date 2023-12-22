const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres', 'roketuser', 'roket2024', {
    host: 'tarea.cv2quftjeoly.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
});