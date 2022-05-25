const { User } = require('../database/models');

const getAll = async () => User.findAll();

module.exports = {
    getAll,
};