import { Router } from "express";

import { getAllUsers, getUser } from "../controllers/user.controllers.js";
import { authMiddleware } from "../middlewares/auth/authenticate.js";
import { getUserValidation } from "../middlewares/validators/user.validation.js";
import { validator } from "../middlewares/validators/validator.js";
import { adminMiddleware } from "../middlewares/admin/admin.js";
export const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.get("/", adminMiddleware ,getAllUsers);
userRouter.get("/:id", getUserValidation, validator, getUser);
