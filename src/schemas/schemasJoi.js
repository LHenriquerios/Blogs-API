const Joi = require('joi');

const validateLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

module.exports = {
    validateLogin,
};