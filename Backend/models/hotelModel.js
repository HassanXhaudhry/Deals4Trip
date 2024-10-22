const mongoose = require('mongoose');

const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  roomsAvailable: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  amenities: { type: String, required: true },
  images: { type: [String], required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for converting _id to id
hotelSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure updatedAt is updated on save
hotelSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Hotel', hotelSchema);