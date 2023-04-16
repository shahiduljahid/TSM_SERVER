const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.DB_URI;
// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// API Routes
const authRoutes = require("./routes/auth");
const manageRoute = require("./routes/teachingStaff");
const roleRoute = require("./routes/role");
const salaryRoute = require("./routes/salary");
app.use("/auth", authRoutes); // Auth routes
app.use("/manage", manageRoute); // Auth routes
app.use("/role", roleRoute); // Auth routes
app.use("/salary", salaryRoute); // Auth routes
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
