const express = require("express");
const router = express.Router();
const TeachingStaff = require("../models/TeachingStaff");

// show All

router.get("/staff", async (req, res) => {
  try {
    const teachingStaff = await TeachingStaff.find({});
    res.status(201).json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add staff information
router.post("/staff", async (req, res) => {
  try {
    console.log(req.body)
    const teachingStaff = new TeachingStaff(req.body);
    await teachingStaff.save();
    res.status(201).json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete staff information
router.delete("/staff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teachingStaff = await TeachingStaff.findByIdAndDelete(id);
    if (!teachingStaff) {
      return res.status(404).json({ error: "Staff not found" });
    }
    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Modify staff information
router.put("/staff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teachingStaff = await TeachingStaff.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!teachingStaff) {
      return res.status(404).json({ error: "Staff not found" });
    }
    res.json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
