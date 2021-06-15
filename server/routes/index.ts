import express from "express";
const router = express.Router();
import employees from "../controllers/employee.controller";

// Retrieve all employees
router.get("/api/employees", (req: object, res: object) => {
  console.log("hit router");
  employees.getAll(req, res);
});
// Retrieve one employee by id
router.get("/api/employees/:id", (req: object, res: object) => {
  employees.getOne(req, res);
});
// // Create new employee
// router.post("/api/employees", (req, res) => {
//   employees.createOne(req, res);
// });
// // Update an existing employee by id
// router.put("/api/employees/:id", (req, res) => {
//   employees.updateOne(req, res);
// });
// // Delete an employee by id
// router.delete("/api/employees/:id", (req, res) => {
//   employees.deleteOne(req, res);
// });

export default router;
