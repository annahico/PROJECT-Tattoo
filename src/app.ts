import express, {Application} from "express";
//import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleControllers";


import { login, register } from "./controllers/authController";
import { createServices, deleteServices, getServices, getServicesById, updateServices } from "./controllers/serviceControllers";
import { auth } from "./middlewares/auth";
import { deleteUsers, getUsers } from "./controllers/userControllers";
import { superAdmin } from "./middlewares/superAdmin";



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


app.get('/api/services', getServices);

app.post('/api/services',auth, superAdmin, createServices);

app.put('/api/services/:id',auth, superAdmin, updateServices)

app.delete('/api/services/:id',auth, superAdmin, deleteServices);

app.get('/api/services/:id', getServicesById)




app.get('/api/users', auth,superAdmin, getUsers)

app.delete('/api/users/:id',auth, superAdmin, deleteUsers)
