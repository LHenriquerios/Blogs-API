const { SUCESS, CREATED } = require('../statusCode');
const services = require('../services/cotegory');

const getAll = async (_req, res) => {
    const categories = await services.getAll();
    return res.status(SUCESS).json(categories);
};

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await services.createCategory(name);
    return res.status(CREATED).json(newCategory);
};

module.exports = {
    getAll,
    createCategory,
};