const express = require('express');
const Enquiry = require('../models/Enquiry'); // Import the Enquiry model

const router = express.Router();

// Route to create a new enquiry
router.post('/enquiries', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create a new enquiry
    const newEnquiry = new Enquiry({ name, email, message });
    await newEnquiry.save();
    
    res.status(201).json({ message: 'Enquiry created successfully' });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({ message: 'Failed to create enquiry' });
  }
});

// Route to get all enquiries
router.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    console.error('Error retrieving enquiries:', error);
    res.status(500).json({ message: 'Failed to retrieve enquiries' });
  }
});

module.exports = router;
