const { User, Role } = require("../database/models");

const userController = {};

userController.create = async (req, res) => {
    try {
        const { first_name, last_name, email, password_hash, role_id } = req.body;
        const newUser = await User.create({ first_name, last_name, email, password_hash, role_id });
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error.message
        });
    }
};

userController.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving users",
            error: error.message
        });
    }
};

userController.getById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Role,
                    as: 'role',
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
            attributes: { exclude: ["createdAt", "updatedAt", "role_id"] },
        });
        if (user) {
            res.status(200).json({
                success: true,
                message: "User retrieved successfully",
                data: user
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving user",
            error: error.message
        });
    }
};

userController.update = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const [updated] = await User.update(userData, {
            where: { id: userId }
        });
        if (updated) {
            const updatedUser = await User.findByPk(userId);
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: updatedUser
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message
        });
    }
};

userController.delete = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleted = await User.destroy({
            where: { id: userId }
        });
        if (deleted) {
            res.status(200).json({
                success: true,
                message: "User deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message
        });
    }
};

// Funciones faltantes (puedes implementar estas funciones de acuerdo a tu lógica)
userController.getUserAppointments = async (req, res) => {
    // Implementar lógica
    res.status(200).send("Get user appointments");
};

userController.getUserservices = async (req, res) => {
    // Implementar lógica
    res.status(200).send("Get user services");
};

userController.addAppointmentsToUser = async (req, res) => {
    // Implementar lógica
    res.status(200).send("Add appointments to user");
};

userController.removeUserAppointmentsFromUser = async (req, res) => {
    // Implementar lógica
    res.status(200).send("Remove user appointments from user");
};

userController.getServicesByUserId = async (req, res) => {
    // Implementar lógica
    res.status(200).send("Get services by user ID");
};

module.exports = userController;
