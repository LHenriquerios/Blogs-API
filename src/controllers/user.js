const { SUCESS } = require('../statusCode');
const services = require('../services/user');

const getAll = async (_req, res) => {
    const users = await services.getAll();
    return res.status(SUCESS).json(users);
};

module.exports = {
    getAll,
};