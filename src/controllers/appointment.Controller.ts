import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";


// create appointment
export const createAppointment = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const appointmentDate = req.body.appointmentDate;
        const user = req.body.user;
        const service = req.body.service;
        const userId = req.tokenData.userId;

        if(!userId) {
            return res.status(400).json(
            {
                success: false,
                message: "first name is needed",
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
        const user = req.body.user
        const appointmentDate = req.body.appointmentDate;
        const service = req.body.service;

        const appointment = await Appointment.findOne({
            where: {
            user: user
            }
        })
        if(!appointment) {
            return res.status(404).json(
                {
                    success: false,
                    message: "appointment not found"
                })
        }

        const appointmentUpdated = await Appointment.update (
            {
                user: user
            },
            {
            appointmentDate: appointmentDate,
            service: service
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
// export const getAppointment = async (req: Request, res: Response) => {
//     try {

//         const appointments = await Appointment.findOne({
//             where: 
//             {
//                 user: parseInt(userId)
//             }
//             select: {
//                 //appointmentDate: true,
//                 user: true,
//                 service: true
//             }
//         })
        
//         res.status(200).json(
//             {
//                 success: true,
//                 message: "service retrieved successfully",
//                 data: appointments
//             })
//     } catch (error) {
//         res.status(500).json(
//             {
//                 success: false,
//                 message: "service cant be retrieved",
//                 error: error
//             })
        
//     }
// }

//get appointmentsById
export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id
        const appointmentDate = await Appointment.findOne({
            where: 
            {
            id: parseInt(appointmentId)
            }

        })
        if(!appointmentDate) {
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
                data: appointmentDate
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