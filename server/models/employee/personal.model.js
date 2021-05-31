const db = require("../../config/database");

class Employee {
  constructor(employee) {
    this.username = employee.username;
    this.email = employee.email;
    this.phone = employee.phone;
    this.address = employee.address;
    this.position = employee.position;
    this.manager = employee.manager;
    this.department = employee.department;
    this.password = employee.password;
  }

  static findAll(result) {
    let sqlQuery = "SELECT * FROM employees";
    db.query(sqlQuery, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      result(null, res);
    });
  }

  static findOne(employeeID, result) {
    let sqlQuery = `SELECT * FROM employees WHERE id = ${employeeID} `;
    db.query(sqlQuery, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      // Handler for knowing the employee exist or not !!
      if (res.length) {
        result(null, res[0]);
        return;
      }

      result({ message: `No employee found with id ${employeeID}` }, null);
    });
  }

  static create(newEmployee, result) {
    let sqlQuery = `INSERT INTO employees (username, email, phone, address, position, manager, department, password) 
      VALUES ("${newEmployee.username}","${newEmployee.email}","${newEmployee.phone}","${newEmployee.address}",
      "${newEmployee.position}","${newEmployee.manager}","${newEmployee.department}","${newEmployee.password}") `;

    db.query(sqlQuery, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      result(null, { id: res.insertId, ...newEmployee });
    });
  }

  static update(employeeID, updateEmployee, result) {
    let sqlQuery = `UPDATE employees SET username = "${updateEmployee.username}", email = "${updateEmployee.email}",
    phone = "${updateEmployee.phone}", address = "${updateEmployee.address}", position = "${updateEmployee.position}",
    manager = "${updateEmployee.manager}", department = "${updateEmployee.department}", password = "${updateEmployee.password}" 
    WHERE id = ${employeeID}`;

    db.query(sqlQuery, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.affectedRows === 1) {
        result(null, { id: employeeID, ...updateEmployee });
        return;
      }

      result({ message: `No employee found with id ${employeeID}` }, null);
    });
  }

  static delete(employeeID, result) {
    let sqlQuery = `DELETE FROM employees WHERE id = ${employeeID}`;
    db.query(sqlQuery, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.affectedRows === 1) {
        result(null, { message: `deleted ${res.affectedRows} employees` });
        return;
      }

      result({ message: `No employee found with id ${employeeID}` }, null);
    });
  }
}

module.exports = Employee;
