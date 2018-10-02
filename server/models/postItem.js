var mongoose = require('mongoose');
var Post = require('./post');

var Schema = mongoose.Schema;

var PostItem = Post.discriminator('PostItem', new Schema({
    item: { type: String, required: true }
  })
);

module.exports = PostItem;
