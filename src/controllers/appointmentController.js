const appointmentController = {};
const { Appointment, Service } = require("../database/models");

appointmentController.create = async (req, res) => {
    try {
        const { appointment_date, user_id, service_id } = req.body;
        const newAppointment = await Appointment.create({ appointment_date, user_id, service_id });
        res.status(200).json({
            success: true,
            message: "Appointment created successfully",
            data: newAppointment
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
        const appointments = await Appointment.findAll();
        res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: appointments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appointments",
            error: error.message
        });
    }
};

appointmentController.getById = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await Appointment.findByPk(appointmentId, {
            include: [
                {
                    model: Service,
                    as: 'Service',
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
        if (appointment) {
            res.status(200).json({
                success: true,
                message: "Appointment retrieved successfully",
                data: appointment
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appointment",
            error: error.message
        });
    }
};

appointmentController.update = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appointmentData = req.body;
        const [updated] = await Appointment.update(appointmentData, {
            where: { id: appointmentId }
        });
        if (updated) {
            const updatedAppointment = await Appointment.findByPk(appointmentId);
            res.status(200).json({
                success: true,
                message: "Appointment updated successfully",
                data: updatedAppointment
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating appointment",
            error: error.message
        });
    }
};

appointmentController.delete = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const deleted = await Appointment.destroy({
            where: { id: appointmentId }
        });
        if (deleted) {
            res.status(200).json({
                success: true,
                message: "Appointment deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting appointment",
            error: error.message
        });
    }
};

module.exports = appointmentController;
