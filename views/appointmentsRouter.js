const router = require('express').Router();
const auth = require('../middlewares/tokenVerify'); // Middleware para verificar el token JWT
const isAdmin = require('../middlewares/adminroleVerify'); // Middleware para verificar rol de admin
const appointmentsController = require('../controllers/appointmentsController'); // Controlador para citas

// Obtener todas las citas (requiere autenticación y rol de admin)
router.get('/', auth, isAdmin, appointmentsController.getAllAppointments);

// Obtener citas de un cliente específico (requiere autenticación)
router.get('/:userId', auth, appointmentsController.getCustomerAppointments);

// Obtener citas de un artista específico (requiere autenticación)
router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);

// Crear una nueva cita (requiere autenticación)
router.post('/', auth, appointmentsController.createNewAppointment);

// Modificar una cita (requiere autenticación)
router.put('/', auth, appointmentsController.modifyAppointment);

// Eliminar una cita (requiere autenticación)
router.delete('/:erase', auth, appointmentsController.deleteAppointment);

module.exports = router;
