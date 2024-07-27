const router = require('express').Router();
const auth = require('../middlewares/tokenVerify'); // Middleware para verificar el token JWT
const isAdmin = require('../middlewares/adminroleVerify'); // Middleware para verificar rol de admin
const isArtist = require('../middlewares/artistroleVerify'); // Middleware para verificar rol de artista
const artistsController = require('../controllers/artistsController');

// Obtener todos los artistas
router.get('/', artistsController.getAllArtists);

// Crear un nuevo artista (requiere autenticación y rol de admin)
router.post('/', auth, isAdmin, artistsController.createNewArtist);

// Modificar un artista (requiere autenticación y rol de artista)
router.put('/', auth, isArtist, artistsController.modifyArtist);

// Eliminar un artista (requiere autenticación y rol de artista)
router.delete('/', auth, isArtist, artistsController.deleteArtist);

// Buscar diseños de un artista específico (requiere autenticación y rol de artista)
router.get('/:userId', auth, isArtist, artistsController.searchArtistDesigns);

module.exports = router;
