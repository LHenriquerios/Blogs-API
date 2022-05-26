const { SUCESS, CREATED } = require('../statusCode');
const services = require('../services/user');

const getAll = async (_req, res) => {
    const users = await services.getAll();
    return res.status(SUCESS).json(users);
};

const createUser = async (req, res) => {
    const token = await services.createUser(req.body);
    return res.status(CREATED).json({ token });
};

module.exports = {
    getAll,
    createUser,
};