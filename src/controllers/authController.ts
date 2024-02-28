import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body);

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

        // validacion de email
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
            console.log(passwordEncrypted)

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