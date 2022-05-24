const express = require('express');
const loginRouter = require('./login');

const router = express.Router();

router.use('/login', loginRouter);

module.exports = router;