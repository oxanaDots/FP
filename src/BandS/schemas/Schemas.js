import { Schema, model } from 'mongoose';

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  location: String,
  postcode: String,
  links: [String],
  password: String,
  role: { type: String, default: 'artist' },
}, { timestamps: true });

const businessSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  location: String,
  postcode: String,
  businessType: String,
  password: String,
  role: { type: String, default: 'business' }
}, { timestamps: true });

const Artist = model('Artist', artistSchema);
 const Business = model('Business', businessSchema);

 export  {Artist, Business}