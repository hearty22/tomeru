import { validationResult } from "express-validator";

export const validator = ( req , res, next ) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
      message: "error de validacion",
    });
  }
  next();
};
