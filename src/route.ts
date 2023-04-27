import { Router } from "express";
import authRoutes from "./routes/auth.routes";
import categoriesRoutes from "./routes/categories.routes";
import postsRoutes from "./routes/posts.routes";

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);
router.use('/categories', categoriesRoutes);

export default router;