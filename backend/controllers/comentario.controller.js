const Comentario = require('../models/comentario.model');

exports.postComentario = async (req, res) => {
    try {
      const datos = req.body;
      const comentario = await Comentario.create({
        arbol_id: datos.arbol_id,
        comentario: datos.comentario,
        postulante_id: datos.postulante_id
      });
      res.status(200).json({ mensaje: 'Inserción exitosa', comentario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al insertar comentario.' });
    }
};
