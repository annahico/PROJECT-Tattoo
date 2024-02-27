import express, {Application} from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleControllers";

export const app: Application = express();

app.use(express.json());

app.get("/healthy", (req, res) => {
    res.status(200).json({
        success: true,
        message: "server is healthy"
    })
})

app.get('/roles', getRoles)

app.post('/roles', createRoles)

app.put('/roles/:id', updateRoles)

app.delete('/roles/:id', deleteRoles)
