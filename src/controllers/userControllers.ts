import { Request, Response } from "express";
import { User } from "../models/User";


//view users
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


//view user profile
export const getUserProfile = async(req: Request, res: Response) => {
    try {
        // const users = await User.find(
        //     {
        //         select: {
        //             id: true,
        //             firstName: true,
        //             secondName: true,
        //             email: true,
        //             password: true,
        //             createdAt: true,
        //             updatedAt: true
        //         }
        //     }
        // )
        res.status(200).json (
            {
                success: true,
                message: "user retrieved successfully",
                // data: users
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


//update user
export const updateProfile = async(req:Request, res:Response) => {
    try {

        const firstName = req.body.firstName
        const userId = req.tokenData.userId

        if(!firstName) {
            return res.status(400).json(
            {
                success: false,
                message: "first name is needed",
            })
        }

        const userUpdated =User.update(
            {
                id: userId
            },
            {
                firstName: firstName,
            }
        )

        res.status(200).json (
            {
                success: true,
                message: "users update successfully",
                data: userUpdated
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users cant be updated"
            })
    }
}


//delete user
export const deleteUsers = async (req:Request, res: Response) => {
    try {
        const userId = req.params.id

        const serviceToRemove = await User.findOne(
            {
                where: {
                    id: parseInt(userId)
                }

            })
        if(!serviceToRemove) {
            return res.status(404).json(
            {
                success: true,
                message: "service cant be deleted"
            })
        }

        await User.remove(serviceToRemove);

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