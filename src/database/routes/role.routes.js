const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/roleController");

 //podemos quitar el rolecontroller porque es un fichero exclusivo para role

// ROLE ENDPOINTS
router.post("/",ctrl.create); //se quita la ruta role porque ya lo hereda de index
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.put("/:id",ctrl.update);
router.delete("/:id", ctrl.delete);

module.exports = router;