const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new user (Admin only)
router.post('/', protect, adminOnly, createUser);

// Get all users (Admin only)
router.get('/', protect, adminOnly, getUsers);

// Get a specific user by ID (Admin or the specific users)
router.get('/:id', protect, getUserById);

// Update a user by ID (Admin or the specific users)
router.put('/:id', protect, updateUser);

// Delete a user by ID (Admin only)
router.delete('/:id', protect, adminOnly, deleteUser);

module.exports = router;