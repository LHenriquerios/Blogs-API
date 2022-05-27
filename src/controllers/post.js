const { SUCESS, CREATED } = require('../statusCode');
const services = require('../services/post');

const getAll = async (_req, res) => {
    const posts = await services.getAll();
    return res.status(SUCESS).json(posts);
};

const createPost = async (req, res) => {
    const { id } = req.user.data;
    req.body = { userId: id, ...req.body };
    const newPost = await services.createPost(req.body);
    return res.status(CREATED).json(newPost);
};

module.exports = {
    getAll,
    createPost,
};