const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const enquiryRoutes = require('./routes/enquiryRoutes');
const { default: mongoose } = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to Database
connectDB()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  });

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
//app.use(mongoose())
// Use Enquiry Routes
app.use('/api', enquiryRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).send('Backend is Running');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Shivam`);
});
