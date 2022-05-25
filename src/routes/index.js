const express = require('express');
const loginRouter = require('./login');
const userRouter = require('./user');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;