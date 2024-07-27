const { Design, Artist, Sequelize } = require('../models');

const artistsController = {};

// Search designs by artist user ID
artistsController.searchArtistDesigns = async (req, res) => {
  const Op = Sequelize.Op;
  const userId = req.params.userId;

  try {
    const artists = await Artist.findAll({
      where: { user_id: userId }, // Asumiendo que user_id es un número
      include: [
        {
          model: Design,
          attributes: ['id', 'style', 'picture', 'artist_id'], // Ajustado para especificar campos
        }
      ]
    });

    if (artists.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No designs found for this artist",
      });
    }

    return res.json({
      success: true,
      data: artists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve artist designs",
      error: error.message,
    });
  }
};

// Get all artists
artistsController.getAllArtists = async (req, res) => {
  try {
    const allArtists = await Artist.findAll();

    return res.json({
      success: true,
      message: "All artist data retrieved",
      data: allArtists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve artist data",
      error: error.message,
    });
  }
};

// Create a new artist
artistsController.createNewArtist = async (req, res) => {
  const { user_id, name, portfolio } = req.body;

  try {
    const newArtist = await Artist.create({
      user_id,
      name,
      portfolio
    });

    return res.status(201).json({
      success: true,
      message: "Artist created successfully",
      data: newArtist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create artist",
      error: error.message,
    });
  }
};

// Update an existing artist
artistsController.modifyArtist = async (req, res) => {
  const { id, user_id, name, portfolio } = req.body;

  try {
    const [updated] = await Artist.update(
      { user_id, name, portfolio },
      { where: { id } }
    );

    if (updated) {
      const updatedArtist = await Artist.findByPk(id);
      return res.json({
        success: true,
        message: "Artist updated successfully",
        data: updatedArtist,
      });
    }

    return res.status(404).json({
      success: false,
      message: "Artist not found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update artist",
      error: error.message,
    });
  }
};

// Delete an artist
artistsController.deleteArtist = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Artist.destroy({
      where: { id }
    });

    if (deleted) {
      return res.json({
        success: true,
        message: "Artist successfully deleted",
      });
    }

    return res.status(404).json({
      success: false,
      message: "Artist not found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete artist",
      error: error.message,
    });
  }
};

module.exports = artistsController;
