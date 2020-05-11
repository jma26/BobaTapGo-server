const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const restaurantRouter = require('./restaurantRouter');
const userRouter = require('./userRouter');

router.use('/', indexRouter);
router.use('/users', userRouter);
router.use('/restaurants', restaurantRouter);

module.exports = router;
