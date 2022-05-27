const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const schemaUser = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
});

const schemaCategory = Joi.object({
    name: Joi.string().required(),
});

module.exports = {
    schemaLogin,
    schemaUser,
    schemaCategory,
};