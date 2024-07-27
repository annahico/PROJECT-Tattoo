const { Role } = require("../models");

const rolesController = {};

// Get all roles
rolesController.getAllRoles = async (req, res) => {
  try {
    const allRoles = await Role.findAll();

    return res.json({
      success: true,
      message: "All roles retrieved successfully",
      data: allRoles,
    });
  } catch (error) {
    console.error("Error retrieving roles:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve roles",
      error: error.message,
    });
  }
};

// Create a new role
rolesController.createNewRole = async (req, res) => {
  const { name } = req.body;

  // Basic validation
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Role name is required",
    });
  }

  try {
    const newRole = await Role.create({ name });

    return res.status(201).json({
      success: true,
      message: "Role created successfully",
      data: newRole,
    });
  } catch (error) {
    console.error("Error creating role:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to create role",
      error: error.message,
    });
  }
};

// Update an existing role
rolesController.modifyRole = async (req, res) => {
  const { id, name } = req.body;

  // Basic validation
  if (!id || !name) {
    return res.status(400).json({
      success: false,
      message: "Role ID and name are required",
    });
  }

  try {
    const [updated] = await Role.update(
      { name },
      { where: { id } }
    );

    if (updated === 0) {
      return res.status(404).json({
        success: false,
        message: "Role not found",
      });
    }

    return res.json({
      success: true,
      message: "Role updated successfully",
    });
  } catch (error) {
    console.error("Error updating role:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to update role",
      error: error.message,
    });
  }
};

// Delete a role
rolesController.deleteRole = async (req, res) => {
  const { id } = req.params;

  // Basic validation
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Role ID is required",
    });
  }

  try {
    const deleted = await Role.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({
        success: false,
        message: "Role not found",
      });
    }

    return res.json({
      success: true,
      message: "Role deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting role:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to delete role",
      error: error.message,
    });
  }
};

module.exports = rolesController;
