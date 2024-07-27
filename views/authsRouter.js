const router = require('express').Router();
const authController = require('../controllers/authController');

// Ruta para iniciar sesión
router.post('/login', authController.login);

module.exports = router;
