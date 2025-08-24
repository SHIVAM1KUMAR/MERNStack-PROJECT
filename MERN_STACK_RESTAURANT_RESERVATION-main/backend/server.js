import dotenv from "dotenv";
import express from "express";
import cors from "cors";  // Import CORS middleware
import { dbConnection } from "./database/dbConnection.js"; // Ensure path is correct

// Load environment variables from the config.env file
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 4000;  // Set fallback port

// Enable CORS for your frontend (running on localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',  // Allow your frontend to make requests to the backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific HTTP methods
  credentials: true  // Allow cookies and authentication to be passed between frontend and backend
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to the database
dbConnection();

// Sample route for reservation (adjust this to your actual route)
app.post('/reservation/send', (req, res) => {
  // Here you can handle the reservation logic
  res.status(200).json({ message: 'Reservation successful!' });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
