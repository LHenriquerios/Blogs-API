const express = require('express');
const rescue = require('express-rescue');
const userController = require('../../controllers/user');
const authToken = require('../../middlewares/authToken');
// const { validateLogin } = require('../../schemas/schemasJoi');
// const validateJoi = require('../../middlewares/validateJoi');

const userRouter = express.Router();

userRouter.get('/', rescue(authToken), rescue(userController.getAll));

module.exports = userRouter;