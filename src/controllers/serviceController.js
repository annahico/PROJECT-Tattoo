const { Service, Appointment } = require("../database/models");

const serviceController = {};

serviceController.create = async (req, res) => {
    try {
        const { service_name, description } = req.body;
        const newService = await Service.create({ service_name, description });
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
        const services = await Service.findAll();  // Corregido 'service' por 'services'
        res.status(200).json({
            success: true,
            message: "Services retrieved successfully",
            data: services  // Corregido 'service' por 'services'
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
        const service = await Service.findByPk(serviceId, {
            include: [
                {
                    model: Appointment,
                    as: 'appointments',  // Alias corregido
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
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
