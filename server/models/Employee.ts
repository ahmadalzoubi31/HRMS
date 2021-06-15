import { MysqlError } from "mysql";
import db from "../config/database";

class Employee {
  private username: string;
  private password: string;
  private image: string;
  private email: string;
  private phone: string;
  private address: string;
  private position: string;
  private manager: string;
  private department: string;
  private status: string;
  private first_name: string;
  private middle_name: string;
  private last_name: string;
  private age: string;
  private mobile: string;
  private city: string;
  private selectedContractType: string;
  private start_date: string;
  private end_date: string;
  private salary: string;
  private insurance: string;
  private created_date: string;
  private modified_date: string;

  // constructor(empObj?: any) {
  //   this.username = empObj.username;
  //   this.password = empObj.password;
  //   this.image = empObj.image;
  //   this.email = empObj.email;
  //   this.phone = empObj.phone;
  //   this.address = empObj.address;
  //   this.position = empObj.position;
  //   this.manager = empObj.manager;
  //   this.department = empObj.department;
  //   this.status = empObj.status;
  //   this.first_name = empObj.first_name;
  //   this.middle_name = empObj.middle_name;
  //   this.last_name = empObj.last_name;
  //   this.age = empObj.age;
  //   this.mobile = empObj.mobile;
  //   this.city = empObj.city;
  //   this.selectedContractType = empObj.selectedContractType;
  //   this.start_date = empObj.start_date;
  //   this.end_date = empObj.end_date;
  //   this.salary = empObj.salary;
  //   this.insurance = empObj.insurance;
  //   this.created_date = String(Date.now());
  //   this.modified_date = String(Date.now());
  // }

  public findAll() {
    return new Promise((resolve, reject) => {
      let sqlQuery = "SELECT * FROM employees";
      db.query(sqlQuery, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

  public findOne(employeeID: number) {
    return new Promise((resolve, reject) => {
      let sqlQuery = `SELECT * FROM employees WHERE id = ${employeeID} `;
      db.query(sqlQuery, (error, results, fields) => {
        if (error) reject(error);
        if (results) resolve(results);
        resolve({ message: `No employee found with id ${employeeID}` });
      });
    });
  }

  // public findne(employeeID: any, result: (arg0: MysqlError, arg1: any) => void) {
  //   let sqlQuery = `SELECT * FROM employees WHERE id = ${employeeID} `;
  //   db.query(sqlQuery, (err, docs) => {
  //     if (err) {
  //       result(err, null);
  //       return;
  //     }

  //     // Handler for knowing the employee exist or not !!
  //     if (docs.length) {
  //       result(null, docs[0]);
  //       return;
  //     }

  //     // result({ message: `No employee found with id ${employeeID}` }, null);
  //   });
  // }

  public create(
    newEmployee: { username: any; email: any; phone: any; address: any; position: any; manager: any; department: any; password: any },
    result: (arg0: MysqlError, arg1: any) => void
  ) {
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

  public update(
    employeeID: any,
    updateEmployee: { username: any; email: any; phone: any; address: any; position: any; manager: any; department: any; password: any },
    result: (arg0: MysqlError, arg1: any) => void
  ) {
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

      // result({ message: `No employee found with id ${employeeID}` }, null);
    });
  }

  public delete(employeeID: any, result: (arg0: MysqlError, arg1: { message: string }) => void) {
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

      // result({ message: `No employee found with id ${employeeID}` }, null);
    });
  }
}

export default Employee;
