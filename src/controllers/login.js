const { SUCESS } = require('../statusCode');

const User = require('../services/login');

module.exports = async (req, res) => {
        const token = await User(req.body);
        return res.status(SUCESS).json({ token });
};