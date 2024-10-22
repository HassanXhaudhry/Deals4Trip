const express = require('express');
const {
  createReview,
  getReviews,
  getReviewsForTour,
  getReviewById,
  getTopRatedUsers,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { reviewOwnerOrAdmin } = require('../middlewares/reviewMiddleware');

const router = express.Router();

// Get top rated users (For Admin Only)
router.get('/top-rated-users', protect, adminOnly, getTopRatedUsers);

// Create a new review (authenticated users only)
router.post('/', protect, createReview);

// Get all reviews (public)
router.get('/', getReviews);

// Get reviews for a specific tour (public)
router.get('/:tourId', getReviewsForTour);

// Get a review by ID (public)
router.get('/single/:id', getReviewById);

// Update a review by ID (only the owner or admin can update)
router.put('/:id', protect, reviewOwnerOrAdmin, updateReview);

// Delete a review by ID (only the owner or admin can delete)
router.delete('/:id', protect, reviewOwnerOrAdmin, deleteReview);

module.exports = router;