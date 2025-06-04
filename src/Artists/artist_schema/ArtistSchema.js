const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  location: String,
  postcode: String,
  links: [String],
  role: { type: String, default: 'artist' }
}, { timestamps: true });

module.exports = mongoose.model('Artist', artistSchema);
