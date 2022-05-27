const express = require('express');
const loginRouter = require('./login');
const userRouter = require('./user');
const categoryRouter = require('./category');
const postRouter = require('./post');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;