class UnauthorizedError extends Error {
  constructor(message = "Unauthorized access") {
    super(message);
    this.name = "UnauthorizedError";
    this.status = 401;
  }
}

module.exports = UnauthorizedError;
