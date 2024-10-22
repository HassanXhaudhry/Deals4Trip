const express = require('express');
const {
  createHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  upload
} = require('../controllers/hotelController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route for creating a new hotel (Admins only)
router.post('/', protect, adminOnly, upload.array('images'), createHotel); 

// Route for fetching all hotels (Accessible to all authenticated users)
router.get('/', protect, getHotels);

// Route for fetching a specific hotel by ID (Accessible to all authenticated users)
router.get('/:id', protect, getHotelById);

// Route for updating a hotel by ID (Admins only)
router.put('/:id', protect, adminOnly, upload.array('images', 5), updateHotel);

// Route for deleting a hotel by ID (Admins only)
router.delete('/:id', protect, adminOnly, deleteHotel);

module.exports = router;