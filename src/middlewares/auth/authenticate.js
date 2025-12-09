import userModel from "../../models/users.js";
import { verifyToken } from "../../helpers/jsonwebtoken.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ ok: false, message: "No autorizado" });
  }
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ ok: false, message: "No autorizado" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ ok: false, message: "error interno" });
  }
};
