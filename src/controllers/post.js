const { SUCESS } = require('../statusCode');
const services = require('../services/post');

const getAll = async (_req, res) => {
    const posts = await services.getAll();
    return res.status(SUCESS).json(posts);
};

module.exports = {
    getAll,
};