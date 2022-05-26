const { CONFLICT } = require('../statusCode');
const { User } = require('../database/models');
const generateToken = require('../utils/generateJWT');

const getAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const createUser = async (payload) => {
    const { email } = payload;
    const user = await User.findOne({ where: { email } });

    if (user) {
        const error = { status: CONFLICT, message: 'User already registered' };
        throw error;
    }
    const data = await User.create(payload);
    return generateToken(data);
};

module.exports = {
    getAll,
    createUser,
};