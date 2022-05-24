const User = require('../services/login');

module.exports = async (req, res, next) => {
    try {
        console.log('entrou no controller');
        const user = await User(req.body);
        console.log(user);
        return res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
};