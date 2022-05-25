const express = require('express');
const rescue = require('express-rescue');
const loginController = require('../../controllers/login');
const { validateLogin } = require('../../schemas/schemasJoi');
const validateJoi = require('../../middlewares/validateJoi');

const loginRouter = express.Router();

loginRouter.post('/', validateJoi(validateLogin), rescue(loginController));

module.exports = loginRouter;