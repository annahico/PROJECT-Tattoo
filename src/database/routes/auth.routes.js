const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers//authenticationController");


router.post("/",ctrl.register); 
// router.post("/",ctrl.login; 

module.exports = router;