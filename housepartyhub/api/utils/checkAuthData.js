// adding a middleware for catching errors
exports.checkAuthData = (auth, req, res, next) => {
  const statusCode = auth.statusCode || 500;
  const message = auth.message || "Internal Server Error";
  return res.status(statusCode).json({
    status: statusCode === 500 ? "fail" : "success",
    statusCode,
    message,
  });

  next();
};
