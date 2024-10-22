const Booking = require('../models/bookingModel');
const User = require('../models/userModel');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const isAdmin = req.user.role === 'admin';
    
    if (!isAdmin) {
      req.body.userId = req.user.id;
    }

    const booking = await Booking.create(req.body);

    await User.findByIdAndUpdate(booking.userId, { $push: { bookings: booking._id } });

    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
};


// Get all bookings (Admins see all, Users see their own)
const getBookings = async (req, res) => {
  try {
    const query = req.user.role === 'admin' ? {} : { userId: req.user.id };
    const bookings = await Booking.find(query)
      .populate('userId tourId')
      .populate({ path: 'tourId', populate: { path: 'hotel' } });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
};

// Get a specific booking by ID (Admins see all, Users see their own)
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('userId tourId')
      .populate({ path: 'tourId', populate: { path: 'hotel' } });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (req.user.role !== 'admin' && booking.userId._id.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ message: 'Error fetching booking details', error: error.message });
  }
};

// Update a booking by ID
const updateBooking = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Error updating booking', error: error.message });
  }
};

// Delete a booking by ID
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await User.findByIdAndUpdate(booking.userId, { $pull: { bookings: booking._id } });

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Error deleting booking', error: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};