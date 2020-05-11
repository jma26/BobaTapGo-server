const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    data: Buffer, contentType: String
  },
  toppings: [
    {
      type: String,
      text: String
    }
  ],
  menu: [
    {
      type: String,
      title: String,
      price: Number,
      category: String,
      description: String
    }
  ]
});

module.exports = RestaurantSchema;