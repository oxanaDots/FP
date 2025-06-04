import { Schema, model } from 'mongoose';

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  location: String,
  postcode: String,
  links: [String],
  role: { type: String, default: 'artist' }
}, { timestamps: true });

export default model('Artist', artistSchema);
