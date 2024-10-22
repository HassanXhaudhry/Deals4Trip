const express = require('express');
const { createTour, getTours, getTourById, updateTour, deleteTour, upload } = require('../controllers/tourController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new tour (Admins only, max 5 images)
router.post('/', protect, adminOnly, upload.array('images', 5), createTour);

// Get all tours (Accessible to authenticated users)
router.get('/', protect, getTours);

// Get a specific tour by ID (Accessible to authenticated users)
router.get('/:id', protect, getTourById);

// Update a tour by ID (Admins only, max 5 images)
router.put('/:id', protect, adminOnly, upload.array('images', 5), updateTour);

// Delete a tour by ID (Admins only)
router.delete('/:id', protect, adminOnly, deleteTour);

module.exports = router;