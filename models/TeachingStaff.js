const mongoose = require('mongoose');

const TeachingStaffSchema = new mongoose.Schema({
  IDNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
});

const TeachingStaff = mongoose.model('TeachingStaff', TeachingStaffSchema);

module.exports = TeachingStaff;
