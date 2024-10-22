const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

const DUMMY_USER = {
  id: 'dummy-user-id',
  email: 'demo@minimals.cc',
  password: 'demo1234',
  name: 'John Doe',
  role: 'admin',
};


// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = email === DUMMY_USER.email && password === DUMMY_USER.password
    ? DUMMY_USER
    : await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (user !== DUMMY_USER) {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  }

  const token = generateToken({
    id: user._id || 'dummy-user-id',
    email: user.email,
    name: user.name,
    role: user.role,
  });

  return res.json({
    accessToken: token,
    user: {
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
};

module.exports = {
  login,
};


// Profile
const getProfile = (req, res) => {
  const { user } = req;
  res.json({ user });
};

module.exports = {
  login,
  getProfile,
};