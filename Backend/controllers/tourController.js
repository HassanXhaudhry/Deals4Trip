const fs = require('fs');
const path = require('path');
const Tour = require('../models/tourModel');
const upload = require('../middlewares/uploadMiddleware');

// Create a new tour package
const createTour = async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

    const tour = await Tour.create({
      ...req.body,
      images: imageUrls,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      itinerary: req.body.itinerary,
      availableSpots: req.body.availableSpots,
      price: req.body.price,
      status: req.body.status,
      featured: req.body.featured,
      hotel: req.body.hotel,
    });

    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json({ message: 'Error creating tour', error: error.message });
  }
};

// Get all tours
const getTours = async (req, res) => {
  try {
    const tours = await Tour.find()
      .populate('hotel')
      .populate({
        path: 'reviews',
        populate: {
          path: 'userId',
          select: 'name',
        },
      });

    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tours', error: error.message });
  }
};


// Get a specific tour by ID
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id)
      .populate('hotel')
      .populate({
        path: 'reviews',
        populate: {
          path: 'userId',
          select: 'name',
        },
      });

    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tour details', error: error.message });
  }
};

// Update an existing tour by ID
const updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    let { removedImages } = req.body;

    if (removedImages && !Array.isArray(removedImages)) {
      removedImages = [removedImages];
    }

    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    if (removedImages && removedImages.length > 0) {
      removedImages.forEach((imageUrl) => {
        const filename = imageUrl.split('/uploads/')[1];
        const filepath = path.join(__dirname, '../uploads', filename);

        if (fs.existsSync(filepath)) {
          fs.promises.unlink(filepath).catch(err => console.error(`Error deleting file ${filename}:`, err));
        }
      });
    }

    let imageUrls = req.body.existingImages || [];
    if (req.files && req.files.length > 0) {
      const newImageUrls = req.files.map((file) => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);
      imageUrls = [...imageUrls, ...newImageUrls];
    }

    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        ...req.body,
        images: imageUrls,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedTour);
  } catch (error) {
    res.status(500).json({ message: 'Error updating tour', error: error.message });
  }
};

// Delete a specific tour by ID
const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findByIdAndDelete(id);

    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting tour', error: error.message });
  }
};

module.exports = {
  createTour,
  getTours,
  getTourById,
  updateTour,
  deleteTour,
  upload,
};