const { Appointment, Service } = require("../database/models");
const appointmentController = {};

const dateValidator = (date) => {
    return !isNaN(Date.parse(date)
    );
};


appointmentController.create = async (req, res) => {
    const { appointment_date, service_id, tattoo_artist_id } = req.body;
    const user_id = req.tokenData.userId;
    

    try {
        if (!appointment_date || !user_id || !service_id || !tattoo_artist_id || !dateValidator(appointment_date)) {
            return res.status(400).json({
                success: false,
                message: "Invalid appointment date, user, service, or tattoo artist",
            });
        }

        await Appointment.create({
            appointment_date,
            user_id,
            service_id,
            tattoo_artist_id
        });

        res.status(200).json({
            success: true,
            message: "Appointment created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating Appointment",
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
        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        res.status(500).json({
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
            res.status(200).json({
                success: true,
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
            message: "Error getting appointment",
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
