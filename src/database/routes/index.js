const express = require('express');
const router = express.Router();
const authorRoutes = requiere("./role.routes.js");
const userRoutes = requiere("./user.routes.js");
const serviceRoutes = requiere("./service.routes.js");
const appointmentRoutes = requiere("./appointment.routes.js");

router.use("/roles", roleRoutes);
router.use("/users", userRoutes);
router.use("/services", serviceRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;