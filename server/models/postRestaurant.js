var mongoose = require('mongoose');

var PostRestaurantSchema = new mongoose.Schema({
  name: {type:String},
});

var PostRestaurant = mongoose.model('PostRestaurant', PostRestaurantSchema);

module.exports = PostRestaurant;
