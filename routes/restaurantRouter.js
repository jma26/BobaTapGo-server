const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurants');

const getRestaurants = RestaurantController.getRestaurants;
const addRestaurant = RestaurantController.getRestaurants;

router.get('/', getRestaurants);
router.post('/addRestaurant', addRestaurant);

module.exports = router;
