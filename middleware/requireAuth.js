// middleware/requireAuth.js
const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");
const requireAuth = (req, res, next) => {
  if (!token) {
    return next(new UnauthorizedError("Token missing or invalid"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user to request
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = requireAuth;
