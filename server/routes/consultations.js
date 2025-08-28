import express from 'express';
import Consultation from '../models/Consultation.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all consultations for user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const consultations = await Consultation.find({
      $or: [
        { patientId: req.user._id },
        { doctorId: req.user._id }
      ]
    }).populate('patientId doctorId', 'name phone email');

    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Book a consultation
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { doctorId, scheduledDate, symptoms, type } = req.body;

    const consultation = new Consultation({
      patientId: req.user._id,
      doctorId,
      scheduledDate,
      symptoms,
      type,
      roomId: `room_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    await consultation.save();

    res.status(201).json({
      message: 'Consultation booked successfully',
      consultation
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;