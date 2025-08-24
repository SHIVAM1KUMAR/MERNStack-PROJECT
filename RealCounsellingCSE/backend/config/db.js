const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

mongoose.set('strictQuery', false); // Prevent deprecation warning
mongoose.set('debug', true); // Enable detailed logs

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Increase timeout
    });
    console.log('MongoDB connected successfully');
    console.log("Finally i amm working");
    
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
