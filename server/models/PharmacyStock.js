import mongoose from 'mongoose';

const pharmacyStockSchema = new mongoose.Schema({
  pharmacyId: {
    type: String,
    required: true
  },
  pharmacyName: {
    type: String,
    required: true
  },
  location: {
    address: String,
    city: String,
    state: String,
    pincode: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  medicines: [{
    name: {
      type: String,
      required: true
    },
    category: String,
    manufacturer: String,
    batchNumber: String,
    expiryDate: Date,
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    price: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: 'tablet'
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  }],
  contactInfo: {
    phone: String,
    email: String,
    operatingHours: String
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('PharmacyStock', pharmacyStockSchema);