// middleware/requireAuth.js
const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");
const requireAuth = (req, res, next) => {
  console.log(req);
  const token =
    req.cookies?.token || req.cookies?.authToken || req.cookies?.jwt;

  console.log("All cookies:", req.cookies);
  console.log("Extracted token:", token);
  if (!token) {
    return next(new UnauthorizedError("Token missing or invalid"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded; // attach user to request
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = requireAuth;
