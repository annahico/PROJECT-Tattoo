const { Appointment, Artist, User } = require('../models');

const appointmentsController = {};

// Get all appointments
appointmentsController.getAllAppointments = async (req, res) => {
  try {
    const allAppointments = await Appointment.findAll({
      include: [
        {
          model: Artist,
          required: false,
          attributes: {
            exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'],
            include: ['name']
          }
        },
        {
          model: User,
          required: false,
          attributes: {
            exclude: ['id', 'password', 'role_id', 'updatedAt', 'createdAt'],
            include: ['name', 'surnames', 'phone', 'email']
          }
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
          required: false,
          attributes: {
            exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'],
            include: ['name']
          }
        },
        {
          model: User,
          required: false,
          attributes: {
            exclude: ['id', 'password', 'role_id', 'updatedAt', 'createdAt'],
            include: ['name', 'surnames', 'phone', 'email']
          }
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
          required: false,
          attributes: {
            exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'],
            include: ['name']
          }
        },
        {
          model: User,
          required: false,
          attributes: {
            exclude: ['id', 'password', 'role_id', 'updatedAt', 'createdAt'],
            include: ['name', 'surnames', 'phone', 'email']
          }
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
    const newAppointment = await Appointment.create({
      user_id: req.body.user_id,
      artist_id: req.body.artist_id,
      date: req.body.date,
      hour: req.body.hour,
    });

    return res.json({
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
  let body = req.body;

  try {
    const updateAppointment = await Appointment.update(
      {
        user_id: req.body.user_id,
        artist_id: req.body.artist_id,
        date: req.body.date,
        hour: req.body.hour,
      },
      {
        where: {
          id: body.id
        }
      }
    );

    return res.json({
      success: true,
      message: "Appointment updated successfully",
      data: updateAppointment,
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
  let appointmentId = req.params.erase;

  try {
    const deleteAppointment = await Appointment.destroy({
      where: {
        id: appointmentId
      },
    });

    return res.json({
      success: true,
      message: "Appointment successfully deleted",
      data: deleteAppointment,
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
