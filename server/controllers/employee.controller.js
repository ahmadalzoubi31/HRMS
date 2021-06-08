const Employee = require("../models/employee.model");

// retrieve all employees
const getAll = (req, res) => {
  // Call Find All method from employee class with 1 parameters: callback
  Employee.findAll((err, docs) => {
    if (err) {
      // Logging and Web Response
      console.log({ error: err.message || "Some error occurred while retrieving employees." });
      res.status(500).send({ error: err.message || "Some error occurred while retrieving employees." });
      return;
    }

    if (docs.length === 0) {
      // Logging and Web Response
      console.log({ waring: `No employee found` });
      res.status(200).send({ waring: "No employee found." });
      return;
    }

    res.status(200).send(docs);
    console.log(docs);
  });
};

// retrieve one employee by id
const getOne = (req, res) => {
  // Fetch id from the URL/:id
  let employeeID = req.params.id;
  // Call Find One method from employee class with 2 parameters: employee Id and callback
  Employee.findOne(employeeID, (err, docs) => {
    if (err) {
      // Logging and Web Response
      console.log({ error: err.message || "Some error occurred while retrieving employees." });
      res.status(500).send({ error: err.message || "Some error occurred while retrieving employees." });
      return;
    }

    if (!docs) {
      // Logging and Web Response
      console.log({ warning: `No employee found with id ${id}` });
      res.status(500).send({ warning: `No employee found with id ${id}` });
      return;
    }

    res.status(200).send(docs);
    console.log(docs);
  });
};

// Add new employee
const createOne = (req, res) => {
  // Validate the content that come from the input form
  if (!req.body) {
    console.log({ error: "Content can not be empty!" });
    res.status(400).send({ error: "Content can not be empty!" });
    return;
  }

  console.log({ "request body": req.body });
  let newEmployee = new Employee(req.body);

  // Call create method from employee class with 2 parameters: employee object and callback
  Employee.create(newEmployee, (err, docs) => {
    if (err) {
      // Logging and Web Response
      console.log({ error: err.message || "Some error occurred while creating employee." });
      res.status(500).send({ error: err.message || "Some error occurred while creating employee." });
      return;
    }

    res.status(200).send(docs);
    console.log(docs);
  });
};
const updateOne = (req, res) => {
  let employeeID = req.params.id;

  // Validate the content
  if (!req.body) {
    console.log({ message: "Content can not be empty!" });
    res.status(400).send({ message: "Content can not be empty!" });
    res.end();
    return;
  }

  let updateEmployee = new Employee(req.body);

  Employee.update(employeeID, updateEmployee, (err, data) => {
    if (err) {
      console.log({
        message: err.message || "Some error occurred while updating employee.",
      });
      res.status(500).send({
        message: err.message || "Some error occurred while updating employee.",
      });
      return;
    }

    console.log("updated employee: ", data);
    res.send(data);
    res.end();
  });
};
const deleteOne = (req, res) => {
  let employeeID = req.params.id;
  Employee.delete(employeeID, (err, data) => {
    if (err) {
      console.log({
        message: err.message || "Some error occurred while deleting employee by id.",
      });
      res.status(500).send({
        message: err.message || "Some error occurred while deleting employee by id.",
      });
      res.end();
      return;
    }

    console.log(data);
    res.send(data);
    res.end();
  });
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
