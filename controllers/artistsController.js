const { Design, Artist, Sequelize } = require('../models');

const artistsController = {};

artistsController.searchArtistDesigns = async (req, res) => {
  const Op = Sequelize.Op;

  try {
    const artists = await Artist.findAll({
      where: { user_id: { [Op.like]: `%${req.params.userId}%` } },
      include: [
        {
          model: Design,
          required: false,
          attributes: {
            exclude: ['updatedAt', 'createdAt'],
            include: ['id', 'style', 'picture', 'artist_id']
          }
        }
      ]
    });

    return res.json({
      success: true,
      data: artists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No designs were found",
      error: error.message,
    });
  }
};

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

artistsController.createNewArtist = async (req, res) => {
  try {
    const newArtist = await Artist.create({
      user_id: req.body.user_id,
      name: req.body.name,
      portfolio: req.body.portfolio
    });

    return res.json({
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

artistsController.modifyArtist = async (req, res) => {
  let body = req.body;

  try {
    const updateArtist = await Artist.update(
      {
        user_id: req.body.user_id,
        name: req.body.name,
        portfolio: req.body.portfolio
      },
      {
        where: {
          id: body.id
        }
      }
    );

    return res.json({
      success: true,
      message: "Artist updated successfully",
      data: updateArtist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update artist data",
      error: error.message,
    });
  }
};

artistsController.deleteArtist = async (req, res) => {
  let body = req.body;

  try {
    const deleteArtist = await Artist.destroy({
      where: {
        id: body.id
      },
    });

    return res.json({
      success: true,
      message: "Artist successfully deleted",
      data: deleteArtist,
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
