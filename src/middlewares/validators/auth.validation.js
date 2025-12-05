import { body } from "express-validator";

export const registerValidation = [
  body("username")
  .notEmpty().withMessage("El username es obligatorio")
  .isString().withMessage("El username debe ser una cadena de texto")
  .isLength({ min: 3, max: 20 }).withMessage("El username debe tener al menos 5 caracteres")
  .custom(async (value) => {
    const user = await userModel.findOne({ username: value });
    if (user) {
      throw new Error("El username ya está en uso");
    }
    return true;
  })
  ,
  body("email")
  .notEmpty().withMessage("El email es obligatorio")
  .isString().withMessage("El email debe ser una cadena de texto")
  .isEmail().withMessage("El email debe ser válido")
  .custom(async (value) => {
    const user = await userModel.findOne({ email: value });
    if (user) {
      throw new Error("El email ya está en uso");
    }
    return true;
  })
  ,
  body("password")

  ,
  body("profile.first_name")
  ,
  body("profile.last_name")
  ,
  body("profile.age")
  ,
  body("profile.avatar")
  ,
  body("profile.phone")


]
