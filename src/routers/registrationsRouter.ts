import {
   registerUserController,
   getUsersController,
} from "../controllers/registrationsController";
import { Router } from "express";
import validateDateFormat from "../middlewares/validateDateFormat";
import validateBody from "../middlewares/validateBody";

const registrationRouter = Router();

registrationRouter
   .post("/", validateBody, registerUserController)
   .get("/", validateDateFormat, getUsersController);

export default registrationRouter;
