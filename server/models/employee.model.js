const db = require("../config/database");

class Employee {
  constructor(employee) {
    this.username = employee.profile.username;
    this.password = employee.profile.password;
    this.img = employee.profile.img;
    this.status = employee.profile.status;

    this.first_name = employee.personal_info.first_name;
    this.middle_name = employee.personal_info.middle_name;
    this.last_name = employee.personal_info.last_name;
    this.age = employee.personal_info.age;
    this.manager = employee.personal_info.manager;
    this.mobile = employee.personal_info.mobile;
    this.email = employee.personal_info.email;
    this.city = employee.personal_info.city;
    this.address = employee.personal_info.address;
  }
  //   this.contract_type = employee.contract.contract_type;
  //   this.start_date = employee.contract.start_date;
  //   this.end_date = employee.contract.end_date;
  //   this.salary = employee.contract.salary;
  //   this.insurance = employee.contract.insurance;
  //   this.position = employee.contract.position;
  //   this.department = employee.contract.department;
  //   this.contract = employee.contract.contract;
  // }

  static findAll(result) {
    let sqlQuery = "SELECT * FROM employees;";
    db.query(sqlQuery, (err, docs) => {
      if (err) {
        result(err, null);
        return;
      }

      result(null, docs);
    });
  }

  static findOne(employeeID, result) {
    let sqlQuery = `SELECT * FROM employees WHERE id = ${employeeID};`;
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
