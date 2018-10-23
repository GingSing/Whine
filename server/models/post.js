var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  date: { type: Date, default: Date.now },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, required: true, trim: true },
  content: { type: String, trim: true },
  rating: { type: Number, required: true },
  pictures: { type: Buffer },
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
