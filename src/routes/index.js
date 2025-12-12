import { Router } from "express";
import { authRouter } from "./auth.routes.js"
import { productRouter } from "./product.routes.js"
import { userRouter } from "./user.routes.js";
const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/users", userRouter);
export default router;
