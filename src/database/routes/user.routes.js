const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/userController');


// USER ROUTES  //REMEMBER poner las funciones en
router.get("/profile", ctrl.getUserProfile);
router.put("/profile", ctrl.updateUserProfile);
router.get("/appointment", ctrl.getUserAppointments);
router.post("/appointment", ctrl.addAppointmentsToUser);
router.delete("/appointment", ctrl.removeAppointmentsFromUser);
router.get("/services", ctrl.getUserServices);

// USER ENDPOINTS
router.post("/", ctrl.create);
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete);
router.get("/:id/services", ctrl.getServicesByUserId);

module.exports = router;
