const { INTERNAL_SERVER_ERROR } = require('../statusCode');

module.exports = {
    errorMiddleware: (err, _req, res, _next) => {
      if (err.status) {
        return res.status(err.status).json({ message: err.message });
      }

      return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    },
  }; 