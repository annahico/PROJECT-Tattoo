import { Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find(
            {
                select: {
                    id: true,
                    firstName: true,
                    secondName: true,
                    email: true,
                    password: true,
                    createdAt: true,
                    updatedAt: true
                }
            }
        )
        res.status(200).json (
            {
                success: true,
                message: "users retrieved successfully",
                data: users
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users cant be retrieved"
            })

    }
}