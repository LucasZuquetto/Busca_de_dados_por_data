import express from "express";
import registrationRouter from "./routers/registrationsRouter";

const app = express();

app.use(express.json()).use("/register", registrationRouter);

export default app;
