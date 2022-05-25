const { INTERNAL_SERVER_ERROR, UNAUTHORIZED } = require('../statusCode');

module.exports = (err, _req, res, _next) => {
      if (err.status) {
        return res.status(err.status).json({ message: err.message });
      }
      if (err.message.includes('invalid signature') || err.message.includes('jwt expired')) {
        return res.status(UNAUTHORIZED).json({ message: 'Expired or invalid token' });
      }

      console.log(err.message);
      return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
};