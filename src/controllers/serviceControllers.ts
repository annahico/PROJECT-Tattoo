import { Request, Response } from "express";


export const createServices = async (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: "service create successfully"
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