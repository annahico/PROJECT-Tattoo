import { Request, Response } from "express";
import { User } from "../models/User";


//view users
export const getUsers = async(req: Request, res: Response) => {
    try {

        let limit = Number(req.query.limit) || 10 // generamos una variable para delimitar si se le va a pasar un numero de usuarios por query o que pase por defecto 10
        const page = Number(req.query.page) || 1
        const skip = (page-1)*limit

        if(limit >100) 
        {
            return res.status(404).json(
                {
                    success: false,
                    message: "has superado el límite"
                }
            )
            console.log()
        }

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
                },
                take: limit as number, // el take indica la cantidad de usuarios que vamos a recuperar
                skip: skip// controlamos las páginas que vamos a recuperar.
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

        const userId = req.tokenData.userId
        const user = await User.findOne(
            {
                where: {
                    id: userId
                },
                relations : {
                    role: true
                },
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
                message: "user retrieved successfully",
                data: user
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
                success: false,
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