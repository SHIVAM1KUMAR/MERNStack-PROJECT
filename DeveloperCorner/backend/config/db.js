const mongoose = require('mongoose');
require('dotenv').config();  // Ensure dotenv is used to load environment variables

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/developerCorner";  // Default to local MongoDB if not set

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);  // Exit with a failure code if connection fails
  }
};

module.exports = connectDB;
