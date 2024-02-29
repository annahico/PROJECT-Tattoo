import express, {Application} from "express";
//import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleControllers";
import { createServices, deleteServices, getServices, getServicesById, updateServices } from "./controllers/serviceControllers";
import { login, register } from "./controllers/authController";

export const app: Application = express();

app.use(express.json());

app.get("/healthy", (req, res) => {
    res.status(200).json({
        success: true,
        message: "server is healthy"
    })
})

app.post('/api/auth/register', register);

app.post('/api/auth/login', login);



app.post('/api/services', createServices);

app.delete('/api/services/:id', deleteServices);

app.get('/api/services', getServices);

app.get('/api/services/:id', getServicesById)

app.put('/api/services/:id', updateServices)
