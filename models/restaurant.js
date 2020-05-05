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
    data: Buffer, contenType: String
  }
});

export default mongoose.model('Restaurant', RestaurantSchema);