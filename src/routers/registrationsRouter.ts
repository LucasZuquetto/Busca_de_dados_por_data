import { registerUserController } from "../controllers/registrationsController";
import { Router } from "express";

const registrationRouter = Router();

registrationRouter.post("/", registerUserController);

export default registrationRouter;
