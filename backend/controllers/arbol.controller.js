const Arbol = require('../models/arbol.model');
const Ubicacion = require('../models/ubicacion.model');

/*exports.getAllArboles = async (req, res) => {
    try {
      const arboles = await Arbol.findAll({
        attributes: ['arbol_id', 'nombre_arbol', 'ubicacion_id', 'created_at']
      });
      res.json(arboles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener árboles.' });
    }
};*/
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