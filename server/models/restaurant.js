var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  location: { type: String, required: true },
  pictures: { type: GridFS },
  hours: { type: Array },
  storeinfo: { type: Array },
  reviews: { type: Array }
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
