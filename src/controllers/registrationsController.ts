import { registerUserService } from "../services/registrationsService";
import { Request, Response } from "express";

export async function registerUserController(req: Request, res: Response) {
    const userData = req.body
   try {
    await registerUserService(userData)
    return res.status(200).send(userData)
   } catch (error) {
    return res.sendStatus(400)
   }
}
