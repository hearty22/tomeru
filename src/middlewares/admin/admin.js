

export const adminMiddleware = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role === "admin") {
      next();
    } else {
      return res.status(403).json({ ok : false, message: "No autorizado" });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el adminMiddleware: ${error}`
    })
  }
}
