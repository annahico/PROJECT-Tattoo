const appointmentController = {};
const { Appointments } = require("../database/models");

appointmentController.create = async (req, res) => { // Corregido el nombre del controlador
    try {
        const { appointment_date, user_id, service_id } = req.body; // Corregido el nombre de las propiedades
        const newAppointment = await Appointments.create({ appointment_date, user_id, service_id }); // Corregido el nombre del modelo
        res.status(200).json({
            success: true,
            message: "Appointment created successfully",
            data: newAppointment // Corregido el nombre de la variable
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating appointment",
            error: error.message
        });
    }
};

appointmentController.getAll = async (req, res) => {
    try {
        const appopintments = await Appopintment.findAll();
        res.status(200).json({
            success: true,
            message: "Appopintmenta retrieved successfully",
            data: Appopintments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appopintments",
            error: error.message
        });
    }
};

appointmentController.getById = async (req, res) => {
    try {
        const appopintmentId = req.params.id;
        const appopintment = await Appopintment.findByPk(appopintmentId);
        if (appopintment) {
            res.status(200).json({
                success: true,
                message: "Appopintment retrieved successfully",
                data: appopintment
            });
        } else {
            res.status(404).json({
                success: false,
                message: "appopintment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appopintment",
            error: error.message
        });
    }
};

appointmentController.update = async (req, res) => {
    try {
        const appopintmentId = req.params.id;
        const appopintmentData = req.body;
        const [updated] = await Appopintment.update(appopintmentData, {
            where: { id: appopintmentId }
        });
        if (updated) {
            const updatedAppopintment = await Appopintment.findByPk(appopintmentId);
            res.status(200).json({
                success: true,
                message: "Appopintment updated successfully",
                data: updatedAppopintment
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Appopintment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating appopintment",
            error: error.message
        });
    }
};

appointmentController.delete = async (req, res) => {
    try {
        const appopintmentId = req.params.id;
        const deleted = await Appopintment.destroy({
            where: { id: appopintmentId }
        });
        if (deleted) {
            res.status(200).json({
                success: true,
                message: "Appopintment deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Appopintment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting appopintment",
            error: error.message
        });
    }
};

module.exports = appointmentController;