var mongoose = require('mongoose');
var Post = require('./post');

var Schema = mongoose.Schema;

var PostRestaurant = Post.discriminator('PostRestaurant', new Schema({
    restaurant: { type: Schema.Types.ObjectId, required: true }
  })
);

module.exports = PostRestaurant;
