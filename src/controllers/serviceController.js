const { Service } = require("../models");

const serviceController = {};

// Create a new service
serviceController.create = async (req, res) => {
    const { service_name, description } = req.body;

    if (!service_name || !description) {
        return res.status(400).json({
            success: false,
            message: "Invalid service name or description",
        });
    }

    try {
        await Service.create({ service_name, description });
        return res.status(200).json({
            success: true,
            message: "Service created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating service",
            error: error.message,
        });
    }
};

// Retrieve all services
serviceController.getAll = async (req, res) => {
    try {
        const services = await Service.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "user_id"] },
        });
        return res.status(200).json({
            success: true,
            message: "Services retrieved successfully",
            data: services,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retrieving services",
            error: error.message,
        });
    }
};

// Update a service by ID
serviceController.update = async (req, res) => {
    const serviceId = req.params.id;
    const serviceData = req.body;

    try {
        const [updated] = await Service.update(serviceData, {
            where: { id: serviceId },
        });

        if (updated) {
            const updatedService = await Service.findByPk(serviceId);
            return res.status(200).json({
                success: true,
                message: "Service updated successfully",
                data: updatedService,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Service not found",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating service",
            error: error.message,
        });
    }
};

// Delete a service by ID
serviceController.delete = async (req, res) => {
    const serviceId = req.params.id;

    try {
        const deleted = await Service.destroy({
            where: { id: serviceId },
        });

        if (deleted) {
            return res.status(200).json({
                success: true,
                message: "Service deleted successfully",
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Service not found",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting service",
            error: error.message,
        });
    }
};

module.exports = serviceController;
