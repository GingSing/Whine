var mongoose = require('mongoose');

var PostItemSchema = new mongoose.Schema({
  name: {type: String},
});

var PostItem = mongoose.model('PostItem', PostItemSchema);

module.exports = PostItem;
