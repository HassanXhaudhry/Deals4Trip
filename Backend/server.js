const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/tours', require('./routes/tourRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/hotels', require('./routes/hotelRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes')); 
app.use('/api/users', require('./routes/userRoutes')); 

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});