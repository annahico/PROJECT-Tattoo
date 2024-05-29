const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/roleController"); //podemos quitar el rolecontroller porque es un fichero exclusivo para role

// ROLE ENDPOINTS
router.post("/", auth, ctrl.create); //se quita la ruta role porque ya lo hereda de index
router.get("/", auth, ctrl.getAll);
router.get("/:id", auth, ctrl.getById);
router.put("/:id", auth, ctrl.update);
router.delete("/:id", auth, ctrl.delete);

module.exports = router;