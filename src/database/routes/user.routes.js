const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController"); // Verifica la ruta de importación

// User routes
router.get('/appointment', userController.getUserAppointments);
router.get('/services', userController.getUserservices);
router.post('/appointment', userController.addAppointmentsToUser);
router.delete('/appointment', userController.removeUserAppointmentsFromUser);

// USER ENDPOINTS
router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);
router.get("/:id/services", userController.getServicesByUserId);

module.exports = router;
