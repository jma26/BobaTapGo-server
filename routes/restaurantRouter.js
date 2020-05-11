const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurants');

const getRestaurants = RestaurantController.getRestaurants;

router.get('/', getRestaurants);

module.exports = router;
