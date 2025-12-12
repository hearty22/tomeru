import { param } from "express-validator";

export const getUserValidation = [
  param("id").isMongoId().withMessage("El id no es válido")
  .custom(async (value) => {
    const user = await userModel.findById(value);
    if (!user){
      throw new Error("El id no es válido")
    };
    return true;
  })
];
