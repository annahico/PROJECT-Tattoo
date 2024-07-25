const { Design, Artist, Sequelize } = require('../models');
const designsController = {};

designsController.getAllDesigns = async (req, res) => {
  try {
    const allDesigns = await Design.findAll({
      include: [
        {
          model: Artist,
          required: false,
          attributes: {
            exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'],
            include: ['name'],
          },
        },
      ],
    });
    return res.json({
      success: true,
      message: "All tattoo designs retrieved successfully",
      data: allDesigns,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve tattoo designs",
      error: error.message,
    });
  }
};

designsController.searchADesign = async (req, res) => {
  const Op = Sequelize.Op;

  try {
    const designs = await Design.findAll({
      where: { style: { [Op.like]: `%${req.params.criteria}%` } },
      include: [
        {
          model: Artist,
          required: false,
          attributes: {
            exclude: ['id', 'user_id', 'portfolio', 'updatedAt', 'createdAt'],
            include: ['name'],
          },
        },
      ],
    });

    return res.json({
      success: true,
      data: designs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Tattoo design not found",
      error: error.message,
    });
  }
};

designsController.createNewDesign = async (req, res) => {
  try {
    const newDesign = await Design.create({
      artist_id: req.body.artist_id,
      style: req.body.style,
      picture: req.body.picture,
    });

    return res.send(newDesign);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create the design",
      error: error.message,
    });
  }
};

designsController.modifyDesign = async (req, res) => {
  let body = req.body;

  try {
    const updateDesign = await Design.update(
      {
        artist_id: req.body.artist_id,
        style: req.body.style,
        picture: req.body.picture,
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    return res.json({
      success: true,
      message: "Design updated successfully",
      data: updateDesign,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update the design",
      error: error.message,
    });
  }
};

designsController.deleteDesign = async (req, res) => {
  let tattooId = req.params.erase;

  try {
    const deleteDesign = await Design.destroy({
      where: {
        id: tattooId,
      },
    });
    return res.json({
      success: true,
      message: "Design deleted successfully",
      data: deleteDesign,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete the design",
      error: error.message,
    });
  }
};

module.exports = designsController;
