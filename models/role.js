const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleCode: {
    type: String,
    required: true,
    unique: true,
  },
  roleName: {
    type: String,
    required: true,
  },
  roleDescription: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Role", roleSchema);
