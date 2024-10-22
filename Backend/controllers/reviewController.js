const Review = require('../models/reviewModel');
const Tour = require('../models/tourModel');
const User = require('../models/userModel');

// Create a new review
const createReview = async (req, res) => {
  try {
    const { tourId, reviewText, rating, userId } = req.body;

    const creatorId = req.user.role === 'admin' && userId ? userId : req.user.id;

    const user = await User.findById(creatorId);
    const tour = await Tour.findById(tourId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    const review = new Review({
      userId: creatorId,
      tourId,
      reviewText,
      rating,
    });

    await review.save();

    tour.reviews.push(review._id);
    await tour.save();

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
};


// Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'name').populate('tourId', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
};

// Get reviews for a specific tour
const getReviewsForTour = async (req, res) => {
  try {
    const { tourId } = req.params;
    const { page = 1, limit = 10 } = req.query;
    
    const reviews = await Review.find({ tourId })
      .populate('userId', 'name role')  
      .populate('tourId', 'name images')
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Review.countDocuments({ tourId });

    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for this tour' });
    }

    res.status(200).json({
      reviews,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
};

// Get a review by ID
const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findById(id)
      .populate('userId', 'name role')
      .populate('tourId', 'name images');

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching review', error: error.message });
  }
};

// Get users who gave 5-star ratings
const getTopRatedUsers = async (req, res) => {
  try {
    const fiveStarReviews = await Review.find({ rating: 5 })
      .populate('userId', 'name') 
      .populate('tourId', 'name'); 

    const uniqueUsers = [...new Map(fiveStarReviews.map(review => [review.userId._id, review.userId])).values()];

    res.status(200).json(uniqueUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching top-rated users', error: error.message });
  }
};

// Update a review by ID
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { reviewText, rating } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { reviewText, rating },
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
  } catch (error) {
    res.status(500).json({ message: 'Error updating review', error: error.message });
  }
};

// Delete a review by ID
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    await Tour.findByIdAndUpdate(review.tourId, { $pull: { reviews: review._id } });

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error: error.message });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReviewsForTour,
  getReviewById,
  getTopRatedUsers,
  updateReview,
  deleteReview,
};