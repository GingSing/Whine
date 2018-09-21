var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: }
});

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
