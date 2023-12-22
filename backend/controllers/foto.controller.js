const Foto = require('../models/foto.model');

exports.getAllFotos = async (req, res) => {
    try {
      const fotos = await Foto.findAll({
        attributes: ['foto_id', 'url_foto', 'arbol_id']
      });
      res.json(fotos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener fotos.' });
    }
};

exports.getFotoById = async (req, res) => {
  const fotoId = req.params.id;

  try {
    const foto = await Foto.findOne({
      where: { foto_id: fotoId },
      attributes: ['foto_id', 'url_foto', 'arbol_id']
    });

    if (!foto) {
      return res.status(404).json({ error: 'Foto no encontrada.' });
    }

    res.json(foto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la Foto.' });
  }
};

exports.getFotoByArbolId = async (req, res) => {
  const arbolId = req.params.id;

  try {
    const foto = await Foto.findAll({
      where: { arbol_id: arbolId },
      attributes: ['foto_id', 'url_foto', 'arbol_id']
    });

    if (!foto) {
      return res.status(404).json({ error: 'Foto no encontrada.' });
    }

    res.json(foto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la Foto.' });
  }
};
