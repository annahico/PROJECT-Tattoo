import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";


// create appointment
export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentDate = req.body.appointmentDate;
        const user = req.body.user;
        const service = req.body.service;
        const userId = req.tokenData.userId;

        if (!userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "need log tu create appointment",
                })
        }

        const newAppointment = await Appointment.create({
            appointmentDate: appointmentDate,
            user: user,
            service: service,

        }).save()

        res.status(200).json(
            {
                success: true,
                message: "appointment create successfully",
                data: newAppointment
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "appointment cant be create",
                error: error
            })

    }
}

//update appointment
export const updateAppointment = async (req: Request, res: Response) => {
    try {

        const appointmentId = req.params.id
        const service = req.body.service;
        const appointmentDate = req.body.appointmentDate;
        const user = req.body.user;

        const changeAppointment = await Appointment.findOne({
            where: {
                id: parseInt(appointmentId)
            },
        })
        if (!changeAppointment) {
            return res.status(404).json(
                {
                    success: false,
                    message: "appointment not found"
                })
        }

        const appointmentUpdated = await Appointment.update(
            {
                id: parseInt(appointmentId)
            },
            {
                appointmentDate: appointmentDate,
                service: service,
                user: user
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "appointment updated successfully",
                data: appointmentUpdated
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "appointment cant be updated",
                error: error
            })

    }
}

//get appointment
export const getAppointment = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId
        const viewAppointments = await Appointment.find({

            where:
            {
                user:
                {
                    id: userId
                }
            },
            relations: {
                user: true,
                service: true
            },
            select:
            {
                service:
                {
                    name: true
                },
                appointmentDate: true,
                user: {
                    firstName: true,
                    secondName: true,
                    email: true
                }
            }
        })

        if (viewAppointments.length === 0) {
            return res.status(404).json(
                {
                    success: false,
                    message: "No appointments for the user"
                })
        }

        res.status(200).json(
            {
                success: true,
                message: "service retrieved successfully",
                data: viewAppointments
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

//get appointmentsById
export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id
        const recoverAppointment = await Appointment.findOne({
            where:
            {
                id: parseInt(appointmentId)
            },
            relations: {
                service: true,
                user: true
            },
            select:
            {
                service: {
                    name: true
                },
                user: {
                    email: true
                }
            }
        })
        if (!recoverAppointment) {
            return res.status(404).json(
                {
                    success: true,
                    message: "appointment not found"
                })
        }
        res.status(200).json(
            {
                success: true,
                message: "appointment retrieved successfully",
                data: recoverAppointment
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "appointment cant be retrieved",
                error: error
            })

    }
}