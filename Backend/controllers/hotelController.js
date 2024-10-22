const path = require('path');
const fs = require('fs');
const Hotel = require('../models/hotelModel');
const upload = require('../middlewares/uploadMiddleware');

// Create a new hotel
const createHotel = async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

    const hotel = await Hotel.create({
      ...req.body,
      images: imageUrls,
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      phone: req.body.phone,
      rating: req.body.rating,
      roomsAvailable: req.body.roomsAvailable,
      pricePerNight: req.body.pricePerNight,
      amenities: req.body.amenities,
      location: req.body.location,
    });

    res.status(201).json(hotel);
  } catch (error) {
    console.error('Error creating hotel:', error.message);
    res.status(500).json({ message: 'Error creating hotel', error: error.message });
  }
};

// Get all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotels', error: error.message });
  }
};

// Get a specific hotel by ID
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotel details', error: error.message });
  }
};

// Update an existing hotel by ID
const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    let removedImages = req.body.removedImages || [];

    if (removedImages && !Array.isArray(removedImages)) {
      removedImages = [removedImages];
    }

    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    if (removedImages.length > 0) {
      await Promise.all(
        removedImages.map(async (imageUrl) => {
          const filename = imageUrl.split('/uploads/')[1];
          const filepath = path.join(__dirname, '../uploads', filename);

          try {
            if (fs.existsSync(filepath)) {
              await fs.promises.unlink(filepath);
            }
          } catch (err) {
            console.error(`Error deleting file ${filename}:`, err.message);
          }
        })
      );
    }

    const existingImages = req.body.existingImages || [];
    const newImageUrls = req.files ? req.files.map((file) => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`) : [];
    const imageUrls = [...existingImages, ...newImageUrls];

    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      {
        ...req.body,
        images: imageUrls,
      },
      { new: true, runValidators: true }
    );

    if (!updatedHotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error('Error updating hotel:', error.message);
    res.status(500).json({ message: 'Error updating hotel', error: error.message });
  }
};

// Delete a specific hotel by ID
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting hotel', error: error.message });
  }
};

module.exports = {
  createHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  upload,
};