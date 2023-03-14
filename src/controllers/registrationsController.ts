import {
   registerUserService,
   getUsersService,
} from "../services/registrationsService";
import { Request, Response } from "express";

export async function registerUserController(req: Request, res: Response) {
   const userData = req.body;
   try {
      const result = await registerUserService(userData);
      return res.status(200).send(result);
   } catch (error: any) {
      if (error.message === "Conflict") {
         return res.sendStatus(409);
      }
      return res.sendStatus(400);
   }
}

export async function getUsersController(req: Request, res: Response) {
   const { startDate, endDate } = res.locals;
   try {
      const result = await getUsersService(startDate, endDate);
      return res.send(result);
   } catch (error: any) {
      console.log(error.message);
      return res.sendStatus(400);
   }
}
