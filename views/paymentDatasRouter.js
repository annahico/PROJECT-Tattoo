const router = require('express').Router();
const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');
const paymentDatasController = require('../controllers/paymentDatasController');

// Obtener todos los datos de pago (solo accesible para administradores)
router.get('/', auth, isAdmin, paymentDatasController.getAllPaymentDatas);

// Buscar datos de pago por ID de cliente (requerido autenticación)
router.get('/:customerId', auth, paymentDatasController.searchAPaymentData);

// Crear nuevos datos de pago (requerido autenticación)
router.post('/', auth, paymentDatasController.createNewPaymentData);

// Modificar datos de pago (requerido autenticación)
router.put('/', auth, paymentDatasController.modifyPaymentData);

// Eliminar datos de pago (requerido autenticación)
router.delete('/', auth, paymentDatasController.deletePaymentData);

module.exports = router;
