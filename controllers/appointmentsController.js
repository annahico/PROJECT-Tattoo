const { Appointment, Artist, User } = require('../models');

const appointmentsController = {};

// Get all appointments
appointmentsController.getAllAppointments = async (req, res) => {
  try {
    const allAppointments = await Appointment.findAll({
      include: [
        {
          model: Artist,
          attributes: { exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'] },
        },
        {
          model: User,
          attributes: { exclude: ['id', 'password', 'role_id', 'updatedAt', 'createdAt'] },
        }
      ]
    });

    return res.json({
      success: true,
      message: "All appointment data retrieved",
      data: allAppointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve appointment data",
      error: error.message,
    });
  }
};

// Get all appointments for a specific customer
appointmentsController.getCustomerAppointments = async (req, res) => {
  try {
    const allAppointments = await Appointment.findAll({
      where: { user_id: req.params.userId },
      include: [
        {
          model: Artist,
          attributes: { exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'] },
        },
        {
          model: User,
          attributes: { exclude: ['id', 'password', 'role_id', 'updatedAt', 'createdAt'] },
        }
      ]
    });

    return res.json({
      success: true,
      message: "All appointments for the customer retrieved",
      data: allAppointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve customer appointment data",
      error: error.message,
    });
  }
};

// Get all appointments for a specific artist
appointmentsController.getArtistAppointments = async (req, res) => {
  try {
    const allAppointments = await Appointment.findAll({
      where: { artist_id: req.params.artistId },
      include: [
        {
          model: Artist,
          attributes: { exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'] },
        },
        {
          model: User,
          attributes: { exclude: ['id', 'password', 'role_id', 'updatedAt', 'createdAt'] },
        }
      ]
    });

    return res.json({
      success: true,
      message: "All appointments for the artist retrieved",
      data: allAppointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve artist appointment data",
      error: error.message,
    });
  }
};

// Create a new appointment
appointmentsController.createNewAppointment = async (req, res) => {
  try {
    const { user_id, artist_id, date, hour } = req.body;

    const newAppointment = await Appointment.create({
      user_id,
      artist_id,
      date,
      hour,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create appointment",
      error: error.message,
    });
  }
};

// Update an existing appointment
appointmentsController.modifyAppointment = async (req, res) => {
  const { id, user_id, artist_id, date, hour } = req.body;

  try {
    const [updated] = await Appointment.update(
      { user_id, artist_id, date, hour },
      { where: { id } }
    );

    if (updated) {
      const updatedAppointment = await Appointment.findByPk(id);
      return res.json({
        success: true,
        message: "Appointment updated successfully",
        data: updatedAppointment,
      });
    }

    return res.status(404).json({
      success: false,
      message: "Appointment not found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update appointment",
      error: error.message,
    });
  }
};

// Delete an appointment
appointmentsController.deleteAppointment = async (req, res) => {
  const { erase } = req.params;

  try {
    const deleted = await Appointment.destroy({
      where: { id: erase }
    });

    if (deleted) {
      return res.json({
        success: true,
        message: "Appointment successfully deleted",
      });
    }

    return res.status(404).json({
      success: false,
      message: "Appointment not found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete appointment",
      error: error.message,
    });
  }
};

module.exports = appointmentsController;
