import { Router } from "express";
import { signupController } from "../controllers/auth";

export const authRouter = Router();

authRouter.post("/sign-up", signupController);
