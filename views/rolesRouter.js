const express = require('express');
const router = express.Router();
const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');
const rolesController = require('../controllers/rolesController');

// Obtener todos los roles
router.get('/', auth, isAdmin, rolesController.getAllRoles);

// Crear un nuevo rol
router.post('/', auth, isAdmin, rolesController.createNewRole);

// Modificar un rol
router.put('/', auth, isAdmin, rolesController.modifyRole);

// Eliminar un rol
router.delete('/', auth, isAdmin, rolesController.deleteRole);

module.exports = router;
