const { User } = require('../database/models');

const getAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
    getAll,
};