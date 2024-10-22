const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tourId: { type: Schema.Types.ObjectId, ref: 'Tour', required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  totalPrice: { type: Number, required: true },
  numberOfPeople: { type: Number, required: true },
  specialRequests: { type: String, default: '' },
  paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

bookingSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Virtual for converting _id to id
bookingSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

bookingSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model('Booking', bookingSchema);