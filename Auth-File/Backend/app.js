const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalError = require("./controller/errorController");
const AppError = require("./utils/appError"); // Ensure AppError is correctly imported
const userRouters=require("./routes/userRouters");

const app = express();

// Middleware
app.use(cookieParser());

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use(express.json({ limit: "10kb" }));

// Example test route (add your actual routes here)
app.get('/test', (req, res) => {
    res.status(200).json({ message: "Test route is working!" });
});

//app api
app.use('/api/v1/users',userRouters);
// Catch-all route for undefined paths (must be placed **after** actual routes)
app.all('*', (req, res, next) => {
    next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

// Global error handling middleware
app.use(globalError);

module.exports = app;
