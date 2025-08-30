import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, phone, aadhaar, email, password, role } = req.body;

    // Basic validation
    if (!name || !phone || !password) {
      return res.status(400).json({ message: 'Name, phone, and password are required.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [
        { phone },
        ...(email ? [{ email }] : []),
        ...(aadhaar ? [{ aadhaar }] : [])
      ]
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'User with this phone, email, or Aadhaar already exists'
      });
    }

    // Create and save user
    const user = new User({
      name,
      phone,
      aadhaar,
      email,
      password,
      role: role || 'patient'
    });

    await user.save();

    const token = generateToken(user._id);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier can be phone, email, or aadhaar

    const user = await User.findOne({
      $or: [
        { phone: identifier },
        { email: identifier },
        { aadhaar: identifier }
      ]
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get current user
router.get('/me', authenticateToken, (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      name: req.user.name,
      phone: req.user.phone,
      email: req.user.email,
      role: req.user.role,
      profile: req.user.profile
    }
  });
});

export default router;