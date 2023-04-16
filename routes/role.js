const express = require("express");
const router = express.Router();
const Role = require("../models/role");

// Add Role
router.post("/", async (req, res) => {
  try {
    const { roleCode, roleName, roleDescription } = req.body;
    const role = new Role({
      roleCode,
      roleName,
      roleDescription,
    });
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Roles
router.get("/", async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Role by ID
router.get("/:id", async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Role by ID
router.put("/:id", async (req, res) => {
  try {
    const { roleCode, roleName, roleDescription } = req.body;
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    role.roleCode = roleCode;
    role.roleName = roleName;
    role.roleDescription = roleDescription;
    role.updated_at = Date.now();
    await role.save();
    res.json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Role by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ error: "role not found" });
    }
    res.json({ message: "role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
