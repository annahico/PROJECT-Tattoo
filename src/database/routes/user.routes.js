const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// USER ROUTES
router.get("/profile", auth, ctrl.getUserProfile);
router.put("/profile", auth, ctrl.updateUserProfile);
router.get('/appointment', auth, ctrl.userController.getUserAppointments);
router.post('/appointment', auth,  ctrl.userController.addAppointmentsToUser);
router.delete('/appointment', auth,  ctrl.userController.removeUserAppointmentsFromUser);
router.get('/services', auth,  ctrl.userController.getUserServices);

// USER ENDPOINTS
router.post("/", auth, ctrl.userController.create);
router.get("/", auth, ctrl.userController.getAll);
router.get("/:id", auth,  ctrl.userController.getById);
router.put("/:id", auth, ctrl.userController.update);
router.delete("/:id", auth, ctrl.userController.delete);
router.get("/:id/services",auth, ctrl.userController.getServicesByUserId);

module.exports = router;
