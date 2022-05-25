require('dotenv').config();
const JWT = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

module.exports = (payload) => JWT.sign({ data: payload }, JWT_SECRET, JWT_CONFIG);