// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error("Error Stack:", err.stack);

  // Default error
  let error = {
    message: err.message || "Internal Server Error",
    status: err.status || 500,
  };

  // MongoDB duplicate key error
  if (err.code === 11000) {
    error.message = "Duplicate field value entered";
    error.status = 400;
  }

  // MongoDB validation error
  if (err.name === "ValidationError") {
    error.message = Object.values(err.errors).map((val) => val.message).join(", ");
    error.status = 400;
  }

  // MongoDB CastError
  if (err.name === "CastError") {
    error.message = "Invalid ID format";
    error.status = 400;
  }

  res.status(error.status).json({
    error: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

// 404 handler for undefined routes
const notFound = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
};

module.exports = { errorHandler, notFound };