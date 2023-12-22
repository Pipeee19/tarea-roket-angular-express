const Arbol = require('../models/arbol.model');
const Ubicacion = require('../models/ubicacion.model');

exports.getAllArboles = async (req, res) => {
  try {
    const arbolesConUbicaciones = await Arbol.findAll({
      include: [{
        model: Ubicacion,
        as: "ubicacion",
        attributes: ['latitud', 'longitud']
      }]
    });

    res.json(arbolesConUbicaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}