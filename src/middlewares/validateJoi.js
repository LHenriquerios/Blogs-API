const { BAD_REQUEST } = require('../statusCode');

module.exports = (schemas) => (req, res, next) => {
    const { error } = schemas.validate(req.body);
    if (error && error.details[0].message.includes('is required')) {
        next({ status: BAD_REQUEST, message: 'Some required fields are missing' });
    }
      if (error) next({ status: BAD_REQUEST, message: error.details[0].message });

    next();
};