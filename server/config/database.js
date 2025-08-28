import mongoose from 'mongoose';

export const connectDB = async () => {
  // In WebContainer environment, MongoDB may not be available
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/niramya';
  
  // Skip database connection if no MongoDB URI is provided or if we're in a development environment without MongoDB
  if (!process.env.MONGODB_URI && process.env.NODE_ENV !== 'production') {
    console.log('⚠️  MongoDB connection skipped - running in development mode without database');
    console.log('💡 To enable database features, set MONGODB_URI environment variable');
    return null;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log(`📊 MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('⚠️  Database connection failed:', error.message);
    console.log('💡 Running without database - some features may be limited');
    console.log('💡 To enable database features, ensure MongoDB is running or set MONGODB_URI');
    return null;
  }
};