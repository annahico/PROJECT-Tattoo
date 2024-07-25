const { Role } = require("../models");

const rolesController = {};

rolesController.getAllRoles = async (req, res) => {
  try {
    const allRoles = await Role.findAll();

    return res.json({
      success: true,
      message: "All roles retrieved successfully",
      data: allRoles,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve roles",
      error: error.message,
    });
  }
};

rolesController.createNewRole = async (req, res) => {
  try {
    const newRole = await Role.create({
      name: req.body.name,
    });

    return res.send(newRole);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create role",
      error: error.message,
    });
  }
};

rolesController.modifyRole = async (req, res) => {
  let body = req.body;

  try {
    const updateRole = await Role.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    return res.json({
      success: true,
      message: "Role updated successfully",
      data: updateRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update role data",
      error: error.message,
    });
  }
};

rolesController.deleteRole = async (req, res) => {
  let body = req.body;

  try {
    const deleteRole = await Role.destroy({
      where: {
        id: body.id,
      },
    });
    return res.json({
      success: true,
      message: "Role deleted successfully",
      data: deleteRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete role",
      error: error.message,
    });
  }
};

module.exports = rolesController;
