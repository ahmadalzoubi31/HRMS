const Employee = require("../models/emp_mongo.js");

// retrieve all employees
const getAll = (req, res) => {
  Employee.find({}, (err, docs) => {
    if (err) {
      // Logging
      console.log({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
      // Web
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    } else {
      if (docs.length === 0) {
        // Logging
        console.log({ message: `No employee found` });
        // Web
        res.status(200).send({
          message: "No employee found.",
        });
      } else {
        res.status(200).send(docs);
        console.log(docs);
      }
    }
  });
};
const getOne = (req, res) => {
  let employeeID = req.params.id;
  Employee.findById({ _id: employeeID }, (err, doc) => {
    if (err) {
      // Logging
      console.log({
        message:
          err.message || "Some error occurred while retrieving employee.",
      });
      // Web
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee.",
      });
    } else {
      if (!doc) {
        // Logging
        console.log({ message: `No employee found with id ${id}` });
        // Web
        res.status(500).send({
          message: `No employee found with id ${id}`,
        });
      } else {
        res.status(200).send(docs);
        console.log(docs);
      }
    }
  });
};
const createOne = (req, res) => {
  console.log("starting in controller");
  // Validate the content
  if (!req.body) {
    console.log({ message: "Content can not be empty!" });
    res.status(400).send({ message: "Content can not be empty!" });
    res.end();
    return;
  }

  console.log({ "request body": req.body });
  let newEmployee = new Employee(req.body);

  Employee.create(newEmployee, (err, docs) => {
    if (err) {
      console.log({
        message: err.message || "Some error occurred while creating employee.",
      });
      res.status(500).send({
        message: err.message || "Some error occurred while creating employee.",
      });
      res.send();
      return;
    }
    console.log(docs);
    res.status(200).send(docs);
    res.end();
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
        message:
          err.message || "Some error occurred while deleting employee by id.",
      });
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting employee by id.",
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
