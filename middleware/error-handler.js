const { CustomAPIError } = require('../errors/custom-errors');

// Middleware untuk menangani error
const errorHandlerMiddleware = (err, req, res, next) => {
  // Jika error adalah instance dari CustomAPIError
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  // Error lainnya (internal server error)
  return res.status(500).json({ message: 'Something went wrong. Please try again.' });

};

module.exports = errorHandlerMiddleware;
