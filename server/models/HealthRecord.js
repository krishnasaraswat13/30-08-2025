import mongoose from 'mongoose';

const healthRecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  consultationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consultation'
  },
  records: [{
    date: {
      type: Date,
      default: Date.now
    },
    symptoms: [String],
    diagnosis: String,
    medications: [{
      name: String,
      dosage: String,
      frequency: String,
      duration: String
    }],
    vitals: {
      bloodPressure: String,
      heartRate: Number,
      temperature: Number,
      weight: Number,
      height: Number
    },
    notes: String,
    attachments: [String]
  }],
  isSynced: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('HealthRecord', healthRecordSchema);