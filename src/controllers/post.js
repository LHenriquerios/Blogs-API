const { SUCESS, CREATED } = require('../statusCode');
const services = require('../services/post');

const getAll = async (_req, res) => {
    const posts = await services.getAll();
    return res.status(SUCESS).json(posts);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const post = await services.getById(id);
    return res.status(SUCESS).json(post);
};

const createPost = async (req, res) => {
    const { id } = req.user.data;
    req.body = { userId: id, ...req.body };
    const newPost = await services.createPost(req.body);
    return res.status(CREATED).json(newPost);
};

const editPost = async (req, res) => {
    const userId = req.user.data.id;
    const { id } = req.params;
    req.body = { id, userId, ...req.body };
    const updatedPost = await services.editPost(req.body);
    return res.status(SUCESS).json(updatedPost);
};

module.exports = {
    getAll,
    getById,
    createPost,
    editPost,
};