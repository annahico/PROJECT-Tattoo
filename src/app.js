const express = require('express')
// require('dotenev').config()
const dotenv = require('dotenv')
const sequelize = require("./database/db.js")
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
    res.status(200).json({
        success: true,
        message: "Role created successfully",
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


//server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});