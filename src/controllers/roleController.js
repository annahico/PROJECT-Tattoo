const roleController = {};
const { Role } = require("../models");

roleController.create = async (req, res) => {
    try {
        const { id, name } = req.body;
        const newRole = await Role.create({ id, name });
        res.status(200).json({
            success: true,
            message: "Role created successfully",
            data: newRole
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating role",
            error: error.message
        });
    }
};

roleController.getAll = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({
            success: true,
            message: "Roles retrieved successfully",
            data: roles
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving roles",
            error: error.message
        });
    }
};

roleController.getById = async (req, res) => {
    try {
        const roleId = req.params.id;
        const role = await Role.findByPk(roleId);
        if (role) {
            res.status(200).json({
                success: true,
                message: "Role retrieved successfully",
                data: role
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving role",
            error: error.message
        });
    }
};

roleController.update = async (req, res) => {
    try {
        const roleId = req.params.id;
        const roleData = req.body;
        const [updated] = await Role.update(roleData, {
            where: { id: roleId }
        });
        if (updated) {
            const updatedRole = await Role.findByPk(roleId);
            res.status(200).json({
                success: true,
                message: "Role updated successfully",
                data: updatedRole
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating role",
            error: error.message
        });
    }
};

roleController.delete = async (req, res) => {
    try {
        const roleId = req.params.id;
        const deleted = await Role.destroy({
            where: { id: roleId }
        });
        if (deleted) {
            res.status(200).json({
                success: true,
                message: "Role deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting role",
            error: error.message
        });
    }
};

module.exports = roleController;
