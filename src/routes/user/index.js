const express = require('express');
const rescue = require('express-rescue');
const userController = require('../../controllers/user');
const authToken = require('../../middlewares/authToken');
const { schemaUser } = require('../../schemas/schemasJoi');
const { validateUser } = require('../../middlewares/validateJoi');

const userRouter = express.Router();

userRouter.get('/', rescue(authToken), rescue(userController.getAll));
userRouter.get('/:id', rescue(authToken), rescue(userController.getById));
userRouter.post('/', validateUser(schemaUser), rescue(userController.createUser));

module.exports = userRouter;