const { Op } = require("sequelize");
const { Appointment, Service, User } = require("../models");
const appointmentController = {};

appointmentController.create = async (req, res) => {
    const { appointment_date, service_id, tattoo_artist_id } = req.body;
    const user_id = req.tokenData.userId;

    if (!appointment_date || !user_id || !service_id || !tattoo_artist_id) {
        return res.status(400).json({
            success: false,
            message: "Invalid appointment date, user, service, or tattoo artist",
        });
    }

    try {
        // Check if service exists
        const serviceExists = await Service.findByPk(service_id);
        if (!serviceExists) {
            return res.status(400).json({
                success: false,
                message: "Service not found",
            });
        }

        // Check if tattoo artist exists
        const artistExists = await User.findByPk(tattoo_artist_id);
        if (!artistExists) {
            return res.status(400).json({
                success: false,
                message: "Tattoo artist not found",
            });
        }

        await Appointment.create({
            appointment_date,
            user_id,
            service_id,
            tattoo_artist_id
        });

        return res.status(200).json({
            success: true,
            message: "Appointment created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating appointment",
            error: error.message,
        });
    }
};

appointmentController.getMyAppointments = async (req, res) => {
    const user_id = req.tokenData.userId;

    try {
        const appointments = await Appointment.findAll({
            where: { user_id }
        });
        return res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting appointments",
            error: error.message
        });
    }
};

appointmentController.getById = async (req, res) => {
    const appointmentId = req.params.id;

    try {
        const appointment = await Appointment.findByPk(appointmentId);
        if (appointment) {
            return res.status(200).json({
                success: true,
                data: appointment
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting appointment",
            error: error.message
        });
    }
};

appointmentController.update = async (req, res) => {
    const appointmentId = req.params.id;
    const appointmentData = req.body;

    try {
        const [updated] = await Appointment.update(appointmentData, {
            where: { id: appointmentId }
        });

        if (updated) {
            const updatedAppointment = await Appointment.findByPk(appointmentId);
            return res.status(200).json({
                success: true,
                message: "Appointment updated successfully",
                data: updatedAppointment
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating appointment",
            error: error.message
        });
    }
};

appointmentController.delete = async (req, res) => {
    const appointmentId = req.params.id;

    try {
        const deleted = await Appointment.destroy({
            where: { id: appointmentId }
        });

        if (deleted) {
            return res.status(200).json({
                success: true,
                message: "Appointment deleted successfully"
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting appointment",
            error: error.message
        });
    }
};

module.exports = appointmentController;
