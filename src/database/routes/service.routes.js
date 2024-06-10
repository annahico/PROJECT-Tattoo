const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/serviceController");
const auth = require("../../middlewares/auth");
const authorize = require("../../middlewares/authorize");


router.get("/", ctrl.getAll);
router.post("/", auth, authorize("Super_Admin"), ctrl.create);
router.put("/:id", auth, authorize("Super_Admin"), ctrl.update);
router.delete("/:id", auth, authorize("Super_Admin"), ctrl.delete);

module.exports = router;