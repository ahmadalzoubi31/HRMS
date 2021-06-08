const express = require("express");
const router = express.Router();
const employees = require("../controllers/employee.controller");

// Retrieve all employees
router.get("/api/employees", (req, res) => {
  employees.getAll(req, res);
});
// Retrieve one employee by id
router.get("/api/employees/:id", (req, res) => {
  employees.getOne(req, res);
});
// Create new employee
router.post("/api/employees", (req, res) => {
  employees.createOne(req, res);
});
// Update an existing employee by id
router.put("/api/employees/:id", (req, res) => {
  employees.updateOne(req, res);
});
// Delete an employee by id
router.delete("/api/employees/:id", (req, res) => {
  employees.deleteOne(req, res);
});

module.exports = router;
