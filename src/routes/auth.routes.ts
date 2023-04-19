import { Router, NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/auth.controller";

const authRoutes = Router();
const authController = container.resolve(AuthController);

authRoutes.post('/login', (req: Request, res: Response) => {authController.auth(req, res)});

export default authRoutes;