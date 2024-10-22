const mongoose = require('mongoose');

const { Schema } = mongoose;

require('./reviewModel');
require('./hotelModel');


const tourSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  itinerary: { type: String, required: true },
  location: { type: String, required: true },
  availableSpots: { type: Number, required: true },
  status: { type: String, enum: ['available', 'sold out', 'upcoming'], required: true },
  featured: { type: Boolean, default: false },
  images: { type: [String], required: true },
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

tourSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

tourSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Tour', tourSchema);