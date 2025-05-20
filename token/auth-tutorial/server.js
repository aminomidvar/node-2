const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Import routes
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));