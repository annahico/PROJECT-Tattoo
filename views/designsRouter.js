const router = require('express').Router();
const auth = require('../middlewares/tokenVerify');
const isArtist = require('../middlewares/artistroleVerify');
const designsController = require('../controllers/designsController');

// Obtener todos los diseños
router.get('/', designsController.getAllDesigns);

// Buscar un diseño por criterio (ej. ID o nombre)
router.get('/:criteria', designsController.searchADesign);

// Crear un nuevo diseño (requiere autenticación y rol de artista)
router.post('/', auth, isArtist, designsController.createNewDesign);

// Modificar un diseño existente (requiere autenticación y rol de artista)
router.put('/', auth, isArtist, designsController.modifyDesign);

// Eliminar un diseño (ID del diseño se pasa como parámetro)
router.delete('/:erase', designsController.deleteDesign);

module.exports = router;
