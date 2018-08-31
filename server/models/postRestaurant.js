var mongoose = require('mongoose');

var PostRestaurantSchema = new mongoose.Schema({
});

var PostRestaurant = mongoose.model('PostRestaurant', PostRestaurantSchema);

module.exports = PostRestaurant;
