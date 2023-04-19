import { Router } from "express";
import authRoutes from "./routes/auth.routes";
import postsRoutes from "./routes/posts.routes";

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);

export default router;