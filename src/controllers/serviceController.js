const serviceController = {};
const { Service } = require("../database/models");

serviceController.create = async (req, res) => {
    try {
        const { service_name, description } = req.body;
        const newService = await Service.create({ service_name, description }); // Corregido 'User' por 'Service'
        res.status(200).json({
            success: true,
            message: "Service created successfully",
            data: newService
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating service",
            error: error.message
        });
    }
};

serviceController.getAll = async (req, res) => {
    try {
        const service = await Service.findAll();
        res.status(200).json({
            success: true,
            message: "Service retrieved successfully",
            data: services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving services",
            error: error.message
        });
    }
};


serviceController.getById = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await Service.findByPk(serviceId);
        if (service) {
            res.status(200).json({
                success: true,
                message: "Service retrieved successfully",
                data: service
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving service",
            error: error.message
        });
    }
};

serviceController.update = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const serviceData = req.body;
        const [updated] = await Service.update(serviceData, {
            where: { id: serviceId }
        });
        if (updated) {
            const updatedService = await Service.findByPk(serviceId);
            res.status(200).json({
                success: true,
                message: "Service updated successfully",
                data: updatedService
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating service",
            error: error.message
        });
    }
};

serviceController.delete = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const deleted = await Service.destroy({
            where: { id: serviceId }
        });
        if (deleted) {
            res.status(200).json({
                success: true,
                message: "Service deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting service",
            error: error.message
        });
    }
};

module.exports = serviceController;