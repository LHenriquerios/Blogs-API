const { SUCESS } = require('../statusCode');
const services = require('../services/cotegory');

const getAll = async (_req, res) => {
    const categories = await services.getAll();
    return res.status(SUCESS).json(categories);
};

module.exports = {
    getAll,
};