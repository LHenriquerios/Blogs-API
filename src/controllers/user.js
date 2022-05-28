const { SUCESS, CREATED, NO_CONTENT } = require('../statusCode');
const services = require('../services/user');

const getAll = async (_req, res) => {
    const users = await services.getAll();
    return res.status(SUCESS).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await services.getById(id);
    return res.status(SUCESS).json(user);
};

const createUser = async (req, res) => {
    const token = await services.createUser(req.body);
    return res.status(CREATED).json({ token });
};

const deleteUser = async (req, res) => {
    const { id } = req.user.data;
    await services.deleteUser(id);
    return res.status(NO_CONTENT).end();
};

module.exports = {
    getAll,
    getById,
    createUser,
    deleteUser,
};