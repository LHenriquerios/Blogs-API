const { BAD_REQUEST } = require('../statusCode');
const { User } = require('../database/models');
const generateToken = require('../utils/generateJWT');

module.exports = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      const error = { status: BAD_REQUEST, message: 'Invalid fields' };
      throw error;
    }
    delete user.dataValues.password;
    return generateToken(user);
};