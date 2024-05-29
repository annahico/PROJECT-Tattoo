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
        const users = await User.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });
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
    const userId = req.params.id;

    try {
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
    const userId = req.params.id;
    const { password, role_id, ...restUserData } = req.body;

    try {
        const updated = await User.update(restUserData, {
            where: { id: userId }
        });
        if (updated[0]) {
            const updatedUser = await User.findByPk(userId, {
                attributes: { exclude: ["createdAt", "updatedAt", "password"] },
            });
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

userController.getUserProfile = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            success: true,
            message: "User Profile retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving User Profile",
            error: error.message
        });
    }
};

userController.updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updated = await User.update(userData, {
            where: { id: userId }
        });
        if (updated[0]) {
            const updatedUser = await User.findByPk(userId);
            res.status(200).json({
                success: true,
                message: "User Profile updated successfully",
                data: updatedUser
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User Profile not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating User Profile",
            error: error.message
        });
    }
};

userController.getUserAppointments = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updated = await User.update(userData, {
            where: { id: userId }
        });
        if (updated[0]) {
            const updatedUser = await User.findByPk(userId);
            res.status(200).json({
                success: true,
                message: "User Appointment updated successfully",
                data: updatedUser
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User Appointment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating User Appointment",
            error: error.message
        });
    }
};

userController.addAppointmentsToUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password_hash, role_id } = req.body;
        const newUser = await User.create({ first_name, last_name, email, password_hash, role_id });
        res.status(200).json({
            success: true,
            message: "User Appointment created successfully",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user Appointment",
            error: error.message
        });
    }
    res.send('Appointments Added to User');
};

userController.removeUserAppointmentsFromUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleted = await User.destroy({
            where: { id: userId }
        });
        if (deleted) {
            res.status(200).json({
                success: true,
                message: "User Appointment deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User Appointment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user Appointment",
            error: error.message
        });
    }
    res.send('User Appointments Removed');
};

userController.getUserServices = async (req, res) => {
    try {
        const { first_name, last_name, email, password_hash, role_id } = req.body;
        const newUser = await User.create({ first_name, last_name, email, password_hash, role_id });
        res.status(200).json({
            success: true,
            message: "User Service successfully",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user Service",
            error: error.message
        });
    }
    res.send('User Services');
};

userController.getServicesByUserId = async (req, res) => {
    try {
        const { first_name, last_name, email, password_hash, role_id } = req.body;
        const newUser = await User.create({ first_name, last_name, email, password_hash, role_id });
        res.status(200).json({
            success: true,
            message: "User Service by User ID successfully",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user Service by User ID",
            error: error.message
        });
    }
    res.send('Services by User ID');
};

module.exports = userController;
