const express = require('express');
const router = express.Router();
const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');
const usersController = require('../controllers/usersController');

// Obtener todos los usuarios
router.get('/', auth, isAdmin, usersController.getAllUsers);

// Crear un nuevo usuario
router.post('/', usersController.createNewUser);

// Modificar un usuario
router.put('/', auth, usersController.modifyUser);

// Eliminar un usuario
router.delete('/', auth, isAdmin, usersController.deleteUser);

module.exports = router;
