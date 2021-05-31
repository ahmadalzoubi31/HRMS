const db = require("../../config/database");

class EmployeeProfile {
  constructor(employeeProfile) {
    this.username = employeeProfile.username;
    this.password = employeeProfile.password;
    this.image = employeeProfile.image;
  }

  static findAll(result) {
    let sqlQuery = "SELECT * FROM employees";
    db.query(sqlQuery, (err, docs) => {
      if (err) {
        result(err, null);
        return;
      }

      result(null, docs);
    });
  }

  static findOne(employeeID, result) {
    let sqlQuery = `SELECT * FROM employees WHERE id = ${employeeID} `;
    db.query(sqlQuery, (err, docs) => {
      if (err) {
        result(err, null);
        return;
      }

      // Handler for knowing the employee exist or not !!
      if (docs.length) {
        result(null, docs[0]);
        return;
      }

      result({ message: `No employee found with id ${employeeID}` }, null);
    });
  }

  static create(newEmployee, result) {
    let sqlQuery = `INSERT INTO employees (username, email, phone, address, position, manager, department, password) 
      VALUES ("${newEmployee.username}","${newEmployee.email}","${newEmployee.phone}","${newEmployee.address}",
      "${newEmployee.position}","${newEmployee.manager}","${newEmployee.department}","${newEmployee.password}") `;

    db.query(sqlQuery, (err, docs) => {
      if (err) {
        result(err, null);
        return;
      }

      result(null, { id: docs.insertId, ...newEmployee });
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

module.exports = EmployeeProfile;
