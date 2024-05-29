const { User, Role } = require("../database/models");
const userController = {};

userController.create = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });
        const { id, first_name, last_name, email, password_hash, role_id } = req.body;
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
        const userId = req.params.id;
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Role,
                    as: 'role',
                    attributes: { exclude: ["createdAt", "updatedAt"] }, // Coma faltante aquí
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
        const userId = req.params.id;
        const userData = req.body;
        const [updated] = await User.update(userData, {
            where: { id: userId }
        });
        if (updated) {
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
            data: roles
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving User Profile",
            error: error.message
        });
    }
    res.send('User Profile');
};

userController.updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const [updated] = await User.update(ruserData, {
            where: { id: userId }
        });
        if (updated) {
            const updatedRole = await User.findByPk(userId);
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
    res.send('User Profile Updated');
};



module.exports = userController;
