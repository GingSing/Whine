var mongoose = require('mongoose');
var Post = require('./post');

var Schema = mongoose.Schema;

var PostRestaurant = Post.discriminator('PostRestaurant', new Schema({
    restaurant: { type: String, required: true }
  })
);

module.exports = PostRestaurant;
