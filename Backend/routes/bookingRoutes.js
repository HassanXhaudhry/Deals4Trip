const express = require('express');
const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking } = require('../controllers/bookingController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new booking (Accessible by all authenticated users)
router.post('/', protect, createBooking);

// Route to get all bookings (Accessible by all authenticated users)
router.get('/', protect, getBookings);

// Route to get a specific booking by ID (Accessible by all authenticated users)
router.get('/:id', protect, getBookingById);

// Route to update a booking by ID (Admins only)
router.put('/:id', protect, adminOnly, updateBooking);

// Route to delete a booking by ID (Admins only)
router.delete('/:id', protect, adminOnly, deleteBooking);

module.exports = router;