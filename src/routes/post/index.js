const express = require('express');
const rescue = require('express-rescue');
const postController = require('../../controllers/post');
const authToken = require('../../middlewares/authToken');
const { schemaPost } = require('../../schemas/schemasJoi');
const { validatePost } = require('../../middlewares/validateJoi');

const postRouter = express.Router();

postRouter.get('/', rescue(authToken), rescue(postController.getAll));
postRouter.get('/:id', rescue(authToken), rescue(postController.getById));
postRouter.post('/',
    validatePost(schemaPost),
    rescue(authToken),
    rescue(postController.createPost));

module.exports = postRouter;