const express = require('express');
const router = express.Router();
const authRoutes = require("./auth.routes.js");
const roleRoutes = require("./role.routes.js");
const userRoutes = require("./user.routes.js");
const serviceRoutes = require("./service.routes.js");
const appointmentRoutes = require("./appointment.routes.js");

router.use("/auth", authRoutes);
router.use("/roles", roleRoutes);
router.use("/users", userRoutes);
router.use("/services", serviceRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
