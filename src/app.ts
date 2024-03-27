import express, {Application} from "express";


import { login, register } from "./controllers/authController";
import { createServices, deleteServices, getServices, getServicesById, updateServices } from "./controllers/serviceControllers";
import { auth } from "./middlewares/auth";
import { deleteUsers, getUserProfile, getUsers, updateProfile } from "./controllers/userControllers";
import { superAdmin } from "./middlewares/superAdmin";
import { createAppointment, getAppointment, getAppointmentById, updateAppointment } from "./controllers/appointment.Controller";
import cors from "cors";


export const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/healthy", (req, res) => {
    res.status(200).json({
        success: true,
        message: "server is healthy"
    })
});

// auth routes
app.post('/api/auth/register', register);

app.post('/api/auth/login', login);


// users routes
app.get('/api/users', auth,superAdmin, getUsers);

app.get('/api/users/profile',auth, getUserProfile);

app.delete('/api/users/:id',auth, superAdmin, deleteUsers);

app.put('/api/users/profile',auth, updateProfile);


//appointments routes
app.post('/api/appointments',auth, createAppointment);

app.put('/api/appointments/:id', auth, updateAppointment);

app.get('/api/appointments/:id',auth, getAppointmentById);

app.get('/api/appointments',auth, getAppointment);


//services routes
app.get('/api/services', getServices);

app.post('/api/services',auth, superAdmin, createServices);

app.put('/api/services/:id',auth, superAdmin, updateServices);

app.delete('/api/services/:id',auth, superAdmin, deleteServices);

app.get('/api/services/:id', getServicesById);
