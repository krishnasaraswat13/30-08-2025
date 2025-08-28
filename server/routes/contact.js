import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message
    });

    await newMessage.save();

    res.status(201).json({
      message: 'Message sent successfully! We will get back to you soon.',
      id: newMessage._id
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all messages (admin only)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;