import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";



export const createAppointment = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const date = req.body.date;

        const newAppointment = await Appointment.create({
            appointmentDate: date
        }).save()
        
        res.status(200).json(
            {
                success: true,
                message: "service create successfully",
                data: newAppointment
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