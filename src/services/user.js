const { NOT_FOUND, CONFLICT } = require('../statusCode');
const { User } = require('../database/models');
const generateToken = require('../utils/generateJWT');

const getAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
        const error = { status: NOT_FOUND, message: 'User does not exist' };
        throw error;
    }
    return user;
};

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

const deleteUser = async (id) => {
    await User.destroy({ where: { id } });
};

module.exports = {
    getAll,
    getById,
    createUser,
    deleteUser,
};