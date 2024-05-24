const express = require('express');
const dotenv = require('dotenv');
const sequelize = require("./database/db.js");
const { Role } = require("./models/index.js");

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

// CRUD DE ROLE

// Create
app.post("/api/roles", async (req, res) => {
    try {
        const { id, name } = req.body;

        const newRole = await Role.create({ id, name });

        res.status(200).json({
            success: true,
            message: "Role created successfully",
            data: newRole,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating role",
            error: error.message,
        });
    }
});

// Get all
app.get("/api/roles", async (req, res) => {
    try {
        const roles = await Role.findAll();

        res.status(200).json({
            success: true,
            message: "Roles retrieved successfully",
            data: roles,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving roles",
            error: error.message,
        });
    }
});

// Get by ID
app.get("/api/roles/:id", async (req, res) => {
    try {
        const roleId = req.params.id;
        const role = await Role.findByPk(roleId);

        if (role) {
            res.status(200).json({
                success: true,
                message: "Role retrieved successfully",
                data: role,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Role not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving role",
            error: error.message,
        });
    }
});

// Update
app.put("/api/roles/:id", async (req, res) => {
    try {
        const roleId = req.params.id;
        const { name } = req.body;

        const role = await Role.findByPk(roleId);

        if (role) {
            role.name = name;
            await role.save();

            res.status(200).json({
                success: true,
                message: "Role updated successfully",
                data: role,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Role not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating role",
            error: error.message,
        });
    }
});

// Delete
app.delete("/api/roles/:id", async (req, res) => {
    try {
        const roleId = req.params.id;
        const role = await Role.findByPk(roleId);

        if (role) {
            await role.destroy();

            res.status(200).json({
                success: true,
                message: "Role deleted successfully",
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Role not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting role",
            error: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

sequelize.authenticate().then(() => {
    console.log('Database authenticated');
}).catch((error) => {
    console.error('Error authenticating database:', error);
});
