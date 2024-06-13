const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  selectedSeats: {
    type: [Number],
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

