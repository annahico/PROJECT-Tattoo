const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/appointmentController");

// APPOINTMENT END POINT
router.post("/", auth, ctrl.create);
router.get("/", auth, ctrl.getAll);
router.get("/:id", auth, ctrl.getById);
router.put("/:id", auth, ctrl.update);
router.delete("/:id", auth, ctrl.delete);


module.exports = router;