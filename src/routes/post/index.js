const express = require('express');
const rescue = require('express-rescue');
const postController = require('../../controllers/post');
const authToken = require('../../middlewares/authToken');

const postRouter = express.Router();

postRouter.get('/', rescue(authToken), rescue(postController.getAll));

module.exports = postRouter;