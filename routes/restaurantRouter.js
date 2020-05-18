const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurants');

const getRestaurants = RestaurantController.getRestaurants;
const addRestaurant = RestaurantController.addRestaurant;
const deleteRestaurant = RestaurantController.deleteRestaurant;
const updateRestaurant = RestaurantController.updateRestaurant;

router.get('/', getRestaurants);
router.post('/addRestaurant', addRestaurant);
router.delete('/deleteRestaurant', deleteRestaurant);
router.put('/updateRestaurant', updateRestaurant);

module.exports = router;
