import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import CategoriesController from "../controllers/categories.controller";

const categoriesRoutes = Router();
const categoriesController = container.resolve(CategoriesController);

categoriesRoutes.get('/', authMiddleware(), (req: Request, res: Response) => { categoriesController.index(req, res) });
categoriesRoutes.post('/', authMiddleware(), (req: Request, res: Response) => { categoriesController.store(req, res) });
categoriesRoutes.put('/:id', authMiddleware(), (req: Request, res: Response) => { categoriesController.update(req, res) });
categoriesRoutes.delete('/:id', authMiddleware(), (req: Request, res: Response) => { categoriesController.destroy(req, res) });

export default categoriesRoutes;