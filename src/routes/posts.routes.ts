import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import PostsController from "../controllers/posts.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const postsRoutes = Router();
const postsController = container.resolve(PostsController);

postsRoutes.get('/', authMiddleware(), (req: Request, res: Response) => { postsController.index(req, res) });
postsRoutes.post('/', authMiddleware(), (req: Request, res: Response) => { postsController.store(req, res) });
postsRoutes.put('/:id', authMiddleware(), (req: Request, res: Response) => { postsController.update(req, res) });
postsRoutes.get('/:id', authMiddleware(), (req: Request, res: Response) => { postsController.show(req, res) });
postsRoutes.delete('/:id', authMiddleware(), (req: Request, res: Response) => { postsController.destroy(req, res) });

export default postsRoutes;