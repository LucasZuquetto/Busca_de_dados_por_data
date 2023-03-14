import { registerUserController,getUsersController } from "../controllers/registrationsController";
import { Router } from "express";

const registrationRouter = Router();

registrationRouter.post("/", registerUserController).get('/', getUsersController)

export default registrationRouter;
