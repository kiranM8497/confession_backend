const unauthorizedHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(err.status).json({ error: err.message });
  }
  next(err); // Pass to next error handler
};

module.exports = unauthorizedHandler;
