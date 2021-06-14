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

  constructor(empObject: any) {
    this.username = empObject.username;
    this.password = empObject.password;
    this.image = empObject.image;
    this.email = empObject.email;
    this.phone = empObject.phone;
    this.address = empObject.address;
    this.position = empObject.position;
    this.manager = empObject.manager;
    this.department = empObject.department;
    this.status = empObject.status;
    this.first_name = empObject.first_name;
    this.middle_name = empObject.middle_name;
    this.last_name = empObject.last_name;
    this.age = empObject.age;
    this.mobile = empObject.mobile;
    this.city = empObject.city;
    this.selectedContractType = empObject.selectedContractType;
    this.start_date = empObject.start_date;
    this.end_date = empObject.end_date;
    this.salary = empObject.salary;
    this.insurance = empObject.insurance;
    this.created_date = String(Date.now());
    this.modified_date = String(Date.now());
  }

  /**
   * findAll
   */
  public findAll() {
    let sqlQuery: string = "SELECT * FROM employees";
  }

  /**
   * findOne
   */
  public findOne(empID: number) {
    let employeeID = empID;
    let sqlQuery: string = `SELECT * FROM  WHERE id = ${employeeID}`;
  }

  /**
   * addOne
   */
  public addOne(empObject: any) {
    let employeeID = empID;
    let sqlQuery: string = `SELECT * FROM  WHERE id = ${employeeID}`;
  }

  /**
   * deleteOne
   */
  public deleteOne() {}

  /**
   * deleteAll
   */
  public deleteAll() {}

  /**
   * updateOne
   */
  public updateOne() {}
}
