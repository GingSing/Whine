var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  userId: { type: }
  title: { type: String, required: true, trim: true },
  content: { type: String, trim: true },
  pictures: { type: GridFS },
  rating: { type: Number, required: true },
  comments: { type: Array }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
