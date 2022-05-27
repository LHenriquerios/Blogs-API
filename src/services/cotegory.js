// const { NOT_FOUND, CONFLICT } = require('../statusCode');
const { Category } = require('../database/models');

const getAll = async () => Category.findAll();

module.exports = {
    getAll,
};