const express = require('express');
const rescue = require('express-rescue');
const categoryController = require('../../controllers/category');
const authToken = require('../../middlewares/authToken');
const { schemaCategory } = require('../../schemas/schemasJoi');
const { validateJoi } = require('../../middlewares/validateJoi');

const categoryRouter = express.Router();

categoryRouter.get('/', rescue(authToken), rescue(categoryController.getAll));
categoryRouter.post('/',
 rescue(authToken),
 validateJoi(schemaCategory), 
 rescue(categoryController.createCategory));

module.exports = categoryRouter;