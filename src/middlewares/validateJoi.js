const { BAD_REQUEST } = require('../statusCode');

const validateLogin = (schemas) => (req, _res, next) => {
    const { error } = schemas.validate(req.body);

    if (error) {
      switch (error.details[0].type) {
        case 'any.required':
          next({ status: BAD_REQUEST, message: 'Some required fields are missing' });
          break;
        case 'string.empty':
          next({ status: BAD_REQUEST, message: 'Some required fields are missing' });
          break;
        default:
            next({ status: BAD_REQUEST, message: error.details[0].message });
      }
    }

    next();
};

const validateJoi = (schemas) => (req, _res, next) => {
  const { error } = schemas.validate(req.body);

  if (error) next({ status: BAD_REQUEST, message: error.details[0].message });

  next();
};

module.exports = {
  validateLogin,
  validateJoi,
};