// routes/salary.js

const express = require('express');
const router = express.Router();
const Salary = require('../models/salary');

// GET /api/salaries - Get all salaries
router.get('/', async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.json(salaries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/salaries - Add a new salary
router.post('/', async (req, res) => {
  const salary = new Salary(req.body);
  try {
    const newSalary = await salary.save();
    res.status(201).json(newSalary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/salaries/:id - Get a specific salary by ID
router.get('/:id', async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id);
    if (!salary) {
      return res.status(404).json({ message: 'Salary not found' });
    }
    res.json(salary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/salaries/:id - Update a specific salary by ID
router.put('/:id', async (req, res) => {
  try {
    const salary = await Salary.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!salary) {
      return res.status(404).json({ message: 'Salary not found' });
    }
    res.json(salary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/salaries/:id - Delete a specific salary by ID
router.delete('/:id', async (req, res) => {
  try {
    const salary = await Salary.findByIdAndDelete(req.params.id);
    if (!salary) {
      return res.status(404).json({ message: 'Salary not found' });
    }
    res.json({ message: 'Salary deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
