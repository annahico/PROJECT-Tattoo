const { Design, Artist, Sequelize } = require('../models');
const designsController = {};

// Get all designs
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
    console.error("Error retrieving all designs:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve tattoo designs",
      error: error.message,
    });
  }
};

// Search for a design by style
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

    if (designs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No designs found for the given criteria",
      });
    }

    return res.json({
      success: true,
      data: designs,
    });
  } catch (error) {
    console.error("Error searching for design:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to search for design",
      error: error.message,
    });
  }
};

// Create a new design
designsController.createNewDesign = async (req, res) => {
  const { artist_id, style, picture } = req.body;

  // Basic validation
  if (!artist_id || !style || !picture) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    const newDesign = await Design.create({ artist_id, style, picture });
    return res.status(201).json({
      success: true,
      message: "Design created successfully",
      data: newDesign,
    });
  } catch (error) {
    console.error("Error creating new design:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to create the design",
      error: error.message,
    });
  }
};

// Update an existing design
designsController.modifyDesign = async (req, res) => {
  const { id, artist_id, style, picture } = req.body;

  // Basic validation
  if (!id || !artist_id || !style || !picture) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    const [updated] = await Design.update(
      { artist_id, style, picture },
      { where: { id } }
    );

    if (updated === 0) {
      return res.status(404).json({
        success: false,
        message: "Design not found",
      });
    }

    return res.json({
      success: true,
      message: "Design updated successfully",
    });
  } catch (error) {
    console.error("Error updating design:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to update the design",
      error: error.message,
    });
  }
};

// Delete a design
designsController.deleteDesign = async (req, res) => {
  const tattooId = req.params.erase;

  try {
    const deleted = await Design.destroy({ where: { id: tattooId } });

    if (deleted === 0) {
      return res.status(404).json({
        success: false,
        message: "Design not found",
      });
    }

    return res.json({
      success: true,
      message: "Design deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting design:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to delete the design",
      error: error.message,
    });
  }
};

module.exports = designsController;
