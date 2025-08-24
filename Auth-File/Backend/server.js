const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require('./app'); // Importing the Express app

const db = process.env.DB;

// Connect to MongoDB
mongoose.connect(db)
    .then(() => {
        console.log("DB  Connection Successful");
    })
    .catch((err) => {
        console.error("DB Connection Error:", err);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running on Port ${port}`);
});
