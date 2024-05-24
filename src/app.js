const express = require('express');
const dotenv = require('dotenv');
const sequelize = require("./database/db.js");
const roleController = require("./controllers/roleController.js");
const userController = require("./controllers/userController.js");
const serviceController = require("./controllers/serviceController.js");
const appointmentController = require("./controllers/appointmentController.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/healthy', (req, res) => {
    res.status(200).json({
        success: true,
        message: "My APP server is healthy"
    });
});

// ROLE ENDPOINTS
app.post("/api/roles", roleController.create);
app.get("/api/roles", roleController.getAll);
app.get("/api/roles/:id", roleController.getById);
app.put("/api/roles/:id", roleController.update);
app.delete("/api/roles/:id", roleController.delete);

// USER ENDPOINTS
app.post("/api/users", userController.create);
app.get("/api/users", userController.getAll);
app.get("/api/users/:id", userController.getById);
app.put("/api/users/:id", userController.update);
app.delete("/api/users/:id", userController.delete);

// SERVICE ENDPOINT
// SERVICE ENDPOINT
app.post("/api/services", serviceController.create);
app.get("/api/services", serviceController.getAll);
app.get("/api/services/:id", serviceController.getById);
app.put("/api/services/:id", serviceController.update);
app.delete("/api/services/:id", serviceController.delete);



// APPOINTMENT END POINT
// APPOINTMENT END POINT
app.post("/api/appointments", appointmentController.create); // Corregido appointmentService a appointmentController
app.get("/api/appointments", appointmentController.getAll); // Corregido appointmentService a appointmentController
app.get("/api/appointments/:id", appointmentController.getById); // Corregido appointmentService a appointmentController
app.put("/api/appointments/:id", appointmentController.update); // Corregido appointmentService a appointmentController
app.delete("/api/appointments/:id", appointmentController.delete); // Corregido appointmentService a appointmentController


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

sequelize.authenticate().then(() => {
    console.log('Database authenticated');
}).catch((error) => {
    console.error('Error authenticating database:', error);
});
