const express = require('express')
// require('dotenev').config()
const dotenv = require('dotenv')
const sequelize = require("./database/db.js")
const {Role} = require("./models/index.js"); //con index no es necesario ponerlo, ya que viene por defecto
//se pone el modelo 
dotenv.config();

const app = express()

const PORT = process.env.PORT || 4000

app.get('/api/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "My APP server is healthy"
        }
    )
})

// CRUD DE ROLE

//create
app.post("/api/roles", async (req, res) => {

    const roles = await Role.findAll();

    res.status(200).json({
        success: true,
        message: "Role created successfully",
        data: roles,
    });
});

//get all
app.get("/api/roles", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Role retreived successfully",
    });
});

// get by id
app.get("/api/roles", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Author retreived successfully",
    });
});

//update
app.put("/api/roles", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Role updated successfully",
    });
});

//detele
app.delete("/api/roles", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Role deleted successfully",
    });
});



app.listen(PORT, () => {  //arrancar del servidor
    console.log(`Server listening on port: ${PORT}`);
});

sequelize.authenticate(). then(() => { //para autentificar la base de datos
    console.log('Database authenticated');
}).catch(() => {
    console.log('Error authenticating database');
});