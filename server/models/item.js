var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  
});

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
