// models/salary.js

const mongoose = require('mongoose');

// Define the schema for the Salary model
const SalarySchema = new mongoose.Schema({
  categoryName: { type: String, required: true }, // Category Name
  salaryAmount: { type: Number, required: true }, // Salary Amount
  // Add more fields as needed, e.g. staff name, category name, etc.
});

// Create and export the Salary model
module.exports = mongoose.model('Salary', SalarySchema);
