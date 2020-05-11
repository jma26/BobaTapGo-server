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
  })
};

module.exports.getRestaurants = getRestaurants;