import { Request, Response } from "express"
import { Role } from "../models/Role";

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Role retrieved successfuly"
        })
}

//create role
export const createRoles = async (req: Request, res: Response) => { 
    const name = req.body.name; 
    console.log(req.body)
    if (name.length > 50) {
        return res.status(400).json({
            success: false,
            message: "Role name must be under 50 characters"
        })
    }
    const newRole = await Role.create({
        name: name
    }).save()

    res.status(201).json(
        {
            succes: true,
            message: "roles created sucessfully",
            data: newRole
        }
    );
}


//modified role
export const updateRoles = (req: Request, res: Response) => {


    req.params.id;
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            massage: "Role updated succesfuly"
        })
}

//delete role
export const deleteRoles = (req: Request, res: Response) => {

    req.params.id;
    console.log(req.params.id)
    res.status(200).json(
        {
            success: true,
            massage: "Role deleted succesfuly"
        })
}
