var mongoose = require('mongoose');

var PostItemSchema = new mongoose.Schema({
});

var PostItem = mongoose.model('PostItem', PostItemSchema);

module.exports = PostItem;
