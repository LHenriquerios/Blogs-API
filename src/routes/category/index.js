const express = require('express');
const rescue = require('express-rescue');
const categoryController = require('../../controllers/category');
const authToken = require('../../middlewares/authToken');

const categoryRouter = express.Router();

categoryRouter.get('/', rescue(authToken), rescue(categoryController.getAll));

module.exports = categoryRouter;