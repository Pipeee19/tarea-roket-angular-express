const express = require('express');
const router = express.Router();
const arbolController = require('../controllers/arbol.controller');
const ubicacionController = require('../controllers/ubicacion.controller');
const fotoController = require('../controllers/foto.controller');
const comentarioController = require('../controllers/comentario.controller');

/* rutas api para tabla arboles*/ 

router.get('/arboles', arbolController.getAllArboles);


/* rutas api para tabla ubicaciones*/ 

router.get('/ubicaciones', ubicacionController.getAllUbicaciones);
router.get('/ubicaciones/:id', ubicacionController.getUbicacionById);

/* rutas api para tabla fotos*/ 

router.get('/fotos', fotoController.getAllFotos);
router.get('/fotos/:id', fotoController.getFotoById);
router.get('/fotos/arbolid/:id', fotoController.getFotoByArbolId);

/* rutas api para tabla comentarios*/ 
router.post('/comentarios/post', comentarioController.postComentario);

module.exports = router;