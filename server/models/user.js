var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
  username: { type: String, unique: true, required: true, trim:true },
  password: { type: String, unique: true, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  dateJoined: { type: Date, default: Date.now },
  comments: [{ body: "string", by: Schema.Types.ObjectId }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  admin: Boolean,
  reviewedItems:[{ type: Schema.Types.ObjectId, ref: 'Item' }],
  reviewedRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurants' }]
})

var User = mongoose.model('User', UserSchema);

module.exports = User;
