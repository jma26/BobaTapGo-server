const mongoose = require('mongoose');
const RestaurantSchema = require('../models/restaurant');
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

const getRestaurants = (req, res) => {
  Restaurant.find({}, (err, restaurant) => {
    if (err) {
      res.send(err);
    } else {
      res.json(restaurant);
    }
  });
};

const addRestaurant = (req, res) => {
  let restaurant = new Restaurant(req.body);
  restaurant.save((err, Restaurant) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Restaurant);
    };
  });
};

module.exports.getRestaurants = getRestaurants;
module.exports.addRestaurant = addRestaurant;