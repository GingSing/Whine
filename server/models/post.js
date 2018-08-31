var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  date: { type: Date, default: Date.now },
  postedBy{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, required: true, trim: true },
  content: { type: String, trim: true },
  pictures: { type: GridFS },
  rating: { type: Number, required: true },
  comments: [{body: "string", by: mongoose.Schema.Types.ObjectId}]
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
