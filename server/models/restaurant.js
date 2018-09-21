var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  location: { type: String, required: true },
  hours: Array,
  storeInfo: Array,
  reviews: Array
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
