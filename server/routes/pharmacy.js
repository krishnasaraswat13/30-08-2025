import express from 'express';
import PharmacyStock from '../models/PharmacyStock.js';

const router = express.Router();

// Get nearby pharmacies and medicine availability
router.get('/search', async (req, res) => {
  try {
    const { medicine, city, limit = 10 } = req.query;

    let query = {};
    
    if (medicine) {
      query['medicines.name'] = { $regex: medicine, $options: 'i' };
      query['medicines.isAvailable'] = true;
      query['medicines.quantity'] = { $gt: 0 };
    }

    if (city) {
      query['location.city'] = { $regex: city, $options: 'i' };
    }

    const pharmacies = await PharmacyStock.find(query)
      .select('pharmacyName location medicines contactInfo lastUpdated')
      .limit(parseInt(limit));

    const results = pharmacies.map(pharmacy => {
      if (medicine) {
        const availableMedicines = pharmacy.medicines.filter(med => 
          med.name.toLowerCase().includes(medicine.toLowerCase()) && 
          med.isAvailable && 
          med.quantity > 0
        );
        return {
          ...pharmacy.toObject(),
          medicines: availableMedicines
        };
      }
      return pharmacy;
    });

    res.json({
      count: results.length,
      pharmacies: results
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update pharmacy stock (for pharmacy owners)
router.put('/:pharmacyId', async (req, res) => {
  try {
    const { pharmacyId } = req.params;
    const updateData = req.body;

    const pharmacy = await PharmacyStock.findOneAndUpdate(
      { pharmacyId },
      { ...updateData, lastUpdated: new Date() },
      { new: true, upsert: true }
    );

    res.json({
      message: 'Pharmacy stock updated successfully',
      pharmacy
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;