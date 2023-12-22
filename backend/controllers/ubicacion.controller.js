const Ubicacion = require('../models/ubicacion.model');

exports.getAllUbicaciones = async (req, res) => {
    try {
      const ubicaciones = await Ubicacion.findAll({
        attributes: ['ubicacion_id', 'latitud', 'longitud']
      });
      res.json(ubicaciones);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener ubicaciones.' });
    }
};

exports.getUbicacionById = async (req, res) => {
    const ubicacionId = req.params.id;
  
    try {
      const ubicacion = await Ubicacion.findOne({
        where: { ubicacion_id: ubicacionId },
        attributes: ['ubicacion_id', 'latitud', 'longitud']
      });
  
      if (!ubicacion) {
        return res.status(404).json({ error: 'Ubicación no encontrada.' });
      }
  
      res.json(ubicacion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la ubicación.' });
    }
};
