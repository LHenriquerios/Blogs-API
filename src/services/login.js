const { User } = require('../database/models');

module.exports = async (email, _password) => {
    console.log('entrou no service');
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (!user) {
      const error = { status: 404, message: 'Invalid in Service' };
      throw error;
    }
    return user;
};