const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/serviceController");
const auth = require('../middlewares/auth'); 


//PUBLIC ROUTES
router.get("/", auth, ctrl.getAll);
router.get("/:id", auth,  ctrl.getById);

// PROTECTED ROUTES
router.post("/", auth, ctrl.create);
router.put("/:id", auth, ctrl.update);
router.delete("/:id", auth, ctrl.delete);

module.exports = router;