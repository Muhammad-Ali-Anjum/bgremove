const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  subscription: { type: String, default: 'free' }, // 'free' or 'paid'
  downloadCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', UserSchema);
