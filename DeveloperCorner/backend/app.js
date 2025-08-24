const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // Import connectDB function
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to the MongoDB database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
