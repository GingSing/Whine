var mongoose = require('mongoose');
var Post = require('./post');

var Schema = mongoose.Schema;

var PostItem = Post.discriminator('PostItem', new Schema({
    item: { type: Schema.Types.ObjectId, required: true }
  })
);

module.exports = PostItem;
