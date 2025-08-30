import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import consultationRoutes from './routes/consultations.js';
import pharmacyRoutes from './routes/pharmacy.js';
import contactRoutes from './routes/contact.js';
import chatbotRoutes from './routes/chatbot.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

// Connect to MongoDB
const dbConnection = await connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/pharmacy', pharmacyRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'NIRAMYA API is running successfully',
    database: dbConnection ? 'Connected' : 'Disconnected'
  });
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 NIRAMYA Server running on port ${PORT}`);
});