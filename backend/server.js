const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");

dotenv.config();
console.log("EMAIL_PASS:", `"${process.env.EMAIL_PASS}"`);  // Add this line
const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.options("*", cors());

// ✅ Use the contact route
app.use("/api/contact", contactRoutes);

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
