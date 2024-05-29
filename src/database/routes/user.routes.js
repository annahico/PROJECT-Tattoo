const express = require('express');
const userController = require('../../controllers/userController');
const auth = require('../middlewares/auth'); 

const router = express.Router();

// USER ROUTES
// router.get("/profile", auth, userController.getUserProfile);
// router.put("/profile", auth, userController.updateUserProfile);
// router.get('/appointment', auth, userController.getUserAppointments);
// router.post('/appointment', auth, userController.addAppointmentsToUser);
// router.delete('/appointment', auth, userController.removeUserAppointmentsFromUser);
// router.get('/services', auth, userController.getUserServices);

// USER ENDPOINTS
router.post("/", auth, userController.create);
router.get("/", auth, userController.getAll);
router.get("/:id", auth, userController.getById);
router.put("/:id", auth, userController.update);
router.delete("/:id", auth, userController.delete);
// router.get("/:id/services", auth, userController.getServicesByUserId);

module.exports = router;
