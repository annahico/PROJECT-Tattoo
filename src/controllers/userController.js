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
            message: "Users retreived successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreiving users",
            error: error.message,
        });
    }
};

userController.getById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });

        if (!user) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User retreived successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreinving user",
            error: error.message,
        });
    }
};

userController.update = async (req, res) => {
    const userId = req.params.id;
    const { password, role_id, ...restUserData } = req.body;

    try {
        const userToUpdate = await User.findByPk(userId);

        if (!userToUpdate) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        if (password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            userToUpdate.password = hashedPassword;
        }

        userToUpdate.set({
            ...userToUpdate,
            ...restUserData,
        });

        await userToUpdate.save();

        res.status(200).json({
            success: true,
            message: "User updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message,
        });
    }
};

userController.delete = async (req, res) => {
    const userId = req.params.id;

    try {
        const deleteResult = await User.destroy({
            where: {
                id: userId,
            },
        });

        if (deleteResult === 0) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message,
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
    const userId = req.tokenData.userId;
    const { password, role_id, ...restUserData } = req.body;

    try {
        const userToUpdate = await User.findByPk(userId);

        if (!userToUpdate) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        if (password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            userToUpdate.password = hashedPassword;
        }

        userToUpdate.set({
            ...userToUpdate,
            ...restUserData,
        });

        await userToUpdate.save();

        res.status(200).json({
            success: true,
            message: "User updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message,
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
        const userId = req.tokenData.userId;

        const appointmentId = Number(req.body.appointmentId);
        const appointmentToAdd = await Appointment.findByPk(appointmentId);

        if (!appointmentToAdd) {
            return res.status(404).json({
                success: true,
                message: "Appointment not found",
            });
        }

        const appointment = await appointments.findOne({
            where: {
                user_id: userId,
                book_id: appointmentId,
            },
        });

        if (appointment) {
            return res.status(400).json({
                success: true,
                message: "appointment already in the list",
            });
        }

        await FavoriteAppointment.create({
            user_id: userId,
            book_id: appointmentId,
        });

        res.status(200).json({
            success: true,
            message: "appointment added to list",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding appointment",
            error: error.message,
        });
    }
};

userController.removeAppointmentsFromUser = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const appointmentId = Number(req.body.appointmentId);

        const appointmentToRemove = await Book.findByPk(appointmentId);

        if (!appointmentToRemove) {
            return res.status(404).json({
                success: true,
                message: "appointment not found",
            });
        }

        const deleteResult = await appointment.destroy({
            where: {
                user_id: userId,
                book_id: appointmentId,
            },
        });

        if (deleteResult === 0) {
            return res.status(404).json({
                success: true,
                message: "Appointment not found for user",
            });
        }

        res.status(200).json({
            success: true,
            message: "Appointment removed from the list",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error removing appointment from the list",
            error: error.message,
        });
    }
};

userController.getUserServices = async (req, res) => {
    const userId = req.tokenData.userId;

    try {
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });

        res.status(200).json({
            success: true,
            message: "User retreived successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreinving user",
            error: error.message,
        });
    }
};

userController.getServicesByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Service,
                    as: "services",
                    attributes: { exclude: ["createdAt", "updatedAt", "user_id", "service_id"] }
                }
            ],
            attributes: { exclude: ["createdAt", "updatedAt", "password"] }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            message: "Servicios del usuario recuperados exitosamente",
            data: user.services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al recuperar los servicios del usuario",
            error: error.message
        });
    }
};

module.exports = userController;