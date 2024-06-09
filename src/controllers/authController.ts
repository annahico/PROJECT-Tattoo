import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../models/User";

// user register
export const register = async (req: Request, res: Response) => {
    try {

        const email = req.body.email; 
        const password = req.body.password;
        const firstName = req.body.firstName
        const secondName = req.body.secondName

        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "password incorrect"
            })
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid",
                }
            )
        }

            const passwordEncrypted = bcrypt.hashSync(password, 8);

            const newUser = await User.create({
                firstName: firstName,
                secondName: secondName,
                email: email,
                password: passwordEncrypted,
                role: {
                    id: 1
                } 

            }).save()


        return res.status(201).json(
            {
                success: true,
                message: "user registrered successfully"
            }
        )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "user cant be registered",
                error: error
            }
        )
    }
}

// user login

export const login = async(req: Request, res: Response) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        // validate email and password
        if(!email || !password) {
            return res.status(400).json(
            {
                success: false,
                message: "email and password are needed"
            })
        }

        //user recovery
        const user = await User.findOne(
            {
                where : {
                    email: email
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    firstName: true,
                    role: {
                        name: true
                    }
                }
            })

        if(!user) {
            return res.status(500).json(
            {
                success: false,
                message: "email or password invalid"
            })
        }

        //create token

        const token = Jwt.sign(
            {
                userId: user.id,
                name: user.role.name,
                firstName: user.firstName
            },
                process.env.JWT_SECRET as string,
            {
                expiresIn:"5h"
            })

        return res.status(200).json(
        {
            success: true,
            message: "user logged",
            token: token
        })

    } catch (error) {
        res.status(500).json(
        {
            success: false,
            message: "user cant be logged",
            error: error
        })
    }
};

