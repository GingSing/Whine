var mongoose = require('mongoose');

var StoreSchema = new mongoose.Schema({
  name: { type: String },
  image: [{ type: Buffer }],
});

var Store = mongoose.model('Store', StoreSchema);

module.exports = Store;
