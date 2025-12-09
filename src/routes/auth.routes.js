import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controllers.js"
import { registerValidation } from "../middlewares/validators/auth.validation.js";
import { validator } from "../middlewares/validators/validator.js";
import { authMiddleware } from "../middlewares/auth/authenticate.js";



export const authRouter = Router();

authRouter.post("/register", registerValidation, validator ,register );
authRouter.post("/login", login );
authRouter.post("/logout", logout );
authRouter.get("/profile", authMiddleware, profile );
