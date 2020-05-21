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

const deleteRestaurant = (req, res) => {
  let restaurantID = req.body.id;
  Restaurant.findByIdAndRemove(restaurantID, (err, restaurant) => {
    if (err) {
      res.send(err);
    } else {
      // Returns deleted restaurant object
      res.json(restaurant);
    };
  });
};

// Need to test later
const updateRestaurant = (req, res) => {
  let query = {$set: {
    id: req.body._id,
    name: req.body.name,
    description: req.body.description,
    logo: req.body.logo,
    toppings: [
      ...req.body.toppings
    ],
    menu: [
      ...req.body.items
    ]
  }};
  Restaurant.updateOne(query, (err, boolean) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Success', boolean)
    }
  })
}

const addTopping = (req, res) => {
  let restaurantID = req.body.id;
  let topping = {
    title: req.body.title,
    text: req.body.text,
    price: req.body.price
  }
  Restaurant.findByIdAndUpdate(restaurantID, {
    $push: {"toppings": topping}
  }, {
    // New returns document after update is applied
    new: true,
  }, (err, restaurant) => {
    if (err) {
      res.send(err);
    } else {
      res.json(restaurant);
    }
  });
}

module.exports.getRestaurants = getRestaurants;
module.exports.addRestaurant = addRestaurant;
module.exports.deleteRestaurant = deleteRestaurant;
module.exports.updateRestaurant = updateRestaurant;
module.exports.addTopping = addTopping;