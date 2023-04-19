import { Router, NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/auth.controller";
import PostsController from "../controllers/posts.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const postsRoutes = Router();
const postsController = container.resolve(PostsController);

postsRoutes.get('/', authMiddleware(), (req: Request, res: Response) => { postsController.get(req, res) });

export default postsRoutes;