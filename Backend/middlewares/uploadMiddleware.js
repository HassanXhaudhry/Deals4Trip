const multer = require('multer');
const path = require('path');

// Configure multer to store images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
    return cb(new Error('Only images are allowed'));
  }
  cb(null, true);
};

// Multer middleware to handle image uploads
const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;