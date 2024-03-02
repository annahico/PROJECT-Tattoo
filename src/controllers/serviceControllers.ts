import { Request, Response } from "express";
import { Service } from "../models/Service";


// create services
export const createServices = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const name = req.body.name;
        const description = req.body.description;

        const newService = await Service.create({
            name: name,
            description: description
        }).save()
        
        res.status(200).json(
            {
                success: true,
                message: "service create successfully",
                data: newService
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "service cant be create",
                error: error
            })
        
    }
}

// delete services
export const deleteServices = async (req:Request, res: Response) => {
    try {
        const serviceId = req.params.id

        const serviceToRemove = await Service.findOneBy({
            id: parseInt(serviceId)
        })
        if(!serviceToRemove) {
            return res.status(404).json(
            {
                success: true,
                message: "service cant be deleted"
            })
        }

        await Service.remove(serviceToRemove);

        res.status(200).json(
            {
                success: true,
                message: "service delete successfully"
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "service cant be delete",
                error: error
            })
    }
}

// get services

export const getServices = async (req: Request, res: Response) => {
    try {

        const services = await Service.find({
            select: {
                id: true,
                name: true,
                description: true
            }
        })
        
        res.status(200).json(
            {
                success: true,
                message: "service retrieved successfully",
                data: services
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "service cant be retrieved",
                error: error
            })
        
    }
}

//get servicesById
export const getServicesById = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.id
        const service = await Service.findOneBy({
            id: parseInt(serviceId)
        })
        if(!service) {
            return res.status(404).json(
                {
                    success: true,
                    message: "seervice not found"
                })
        }
        res.status(200).json(
            {
                success: true,
                message: "service retrieved successfully",
                data: service
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "service cant be retrieved",
                error: error
            })
        
    }
}

//update services

export const updateServices = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.id;
        const name = req.body.name;
        const description = req.body.description;

        const service = await Service.findOneBy({
            id: parseInt(serviceId)
        })
        if(!service) {
            return res.status(404).json(
                {
                    success: true,
                    message: "seervice not found"
                })
        }

        const serviceUpdated = await Service.update (
            {
                id: parseInt(serviceId)
            },
            {
                name: name,
                description: description
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "service updated successfully",
                data: serviceUpdated
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "service cant be updated",
                error: error
            })
        
    }
}

