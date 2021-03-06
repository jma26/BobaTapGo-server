const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurants');

const getRestaurants = RestaurantController.getRestaurants;
const addRestaurant = RestaurantController.addRestaurant;
const deleteRestaurant = RestaurantController.deleteRestaurant;
const updateRestaurant = RestaurantController.updateRestaurant;
const addTopping = RestaurantController.addTopping;
const addItem = RestaurantController.addItem;
const removeItem = RestaurantController.removeItem;
const removeTopping = RestaurantController.removeTopping;

router.get('/', getRestaurants);
router.post('/addRestaurant', addRestaurant);
router.delete('/deleteRestaurant', deleteRestaurant);
router.put('/updateRestaurant', updateRestaurant);
router.post('/addTopping', addTopping);
router.post('/addItem', addItem);
router.delete('/removeItem', removeItem);
router.delete('/removeTopping', removeTopping);

module.exports = router;
