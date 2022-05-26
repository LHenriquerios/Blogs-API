const express = require('express');
const rescue = require('express-rescue');
const loginController = require('../../controllers/login');
const { schemaLogin } = require('../../schemas/schemasJoi');
const { validateLogin } = require('../../middlewares/validateJoi');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin(schemaLogin), rescue(loginController));

module.exports = loginRouter;