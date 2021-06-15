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

  constructor(empObj?: any) {
    this.username = empObj.username;
    this.password = empObj.password;
    this.image = empObj.image;
    this.email = empObj.email;
    this.phone = empObj.phone;
    this.address = empObj.address;
    this.position = empObj.position;
    this.manager = empObj.manager;
    this.department = empObj.department;
    this.status = empObj.status;
    this.first_name = empObj.first_name;
    this.middle_name = empObj.middle_name;
    this.last_name = empObj.last_name;
    this.age = empObj.age;
    this.mobile = empObj.mobile;
    this.city = empObj.city;
    this.selectedContractType = empObj.selectedContractType;
    this.start_date = empObj.start_date;
    this.end_date = empObj.end_date;
    this.salary = empObj.salary;
    this.insurance = empObj.insurance;
    this.created_date = String(Date.now());
    this.modified_date = String(Date.now());
  }

  public static findAll() {
    return new Promise((resolve, reject) => {
      let sqlQuery = "SELECT * FROM employees";
      db.query(sqlQuery, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  public static findOne(employeeID: number) {
    return new Promise((resolve, reject) => {
      let sqlQuery = `SELECT * FROM employees WHERE id = ${employeeID} `;
      db.query(sqlQuery, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }

        // Warning: No found employee
        if (results == "") {
          resolve({ message: `No employee found with id ${employeeID}` });
          return;
        }

        resolve(results);
      });
    });
  }

  public create() {
    return new Promise((resolve, reject) => {
      let newEmployee = {
        username: this.username,
        password: this.password,
        img: this.image,
        status: this.status,
        first_name: this.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        age: this.age,
        manager: this.manager,
        mobile: this.mobile,
        email: this.email,
        city: this.city,
        address: this.address,
        created_date: this.created_date,
        modified_date: this.modified_date,
      };

      let sqlQuery = "INSERT INTO employees SET ?";
      db.query(sqlQuery, newEmployee, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve({ id: results.insertId, ...newEmployee });
      });
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

  public static delete(employeeID: any, result: (arg0: MysqlError, arg1: { message: string }) => void) {
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
