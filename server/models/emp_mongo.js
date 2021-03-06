const db = require("../config/database-mongoose");
const { Schema } = require("mongoose");

const employeeSchema = new Schema(
  {
    profile: {
      employeeId: { type: Number, required: true, unique: true, index: true },
      username: { type: String, required: true, unique: true, index: true },
      password: { type: String, required: true },
      image: {
        type: String,
        required: true,
        default: `<svg id="Cap_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 508 508" xml:space="preserve">
<path style="fill:#89D6F7;" d="M254,0C113.7,0,0,113.7,0,254c0,75.7,33.1,143.7,85.7,190.3C130.6,483.9,189.5,508,254,508
 c64.6,0,123.5-24.1,168.3-63.8C474.9,397.7,508,329.7,508,254C508,113.7,394.3,0,254,0z"/>
<path style="fill:#41596B;" d="M402.4,423.6c-13-9.7-36.6-25.8-62.3-37.7c-25.7-11.8-40.8-39.5-36.7-67.4c0-0.4,0.1-0.8,0.2-1.3
 c0,0,58.5-39.6,50.4-78.2c0,0,1.8,0.1,4.5-0.1c25.8-2.4,27.4-40.8,1.9-44.9c-0.2,0-0.5-0.1-0.7-0.1l-0.8-4.2
 c7.8-27.3,26.8-110-30.7-102c0,0-41.3-68.3-128.6-35.4C112.2,85.1,135,163.4,135,163.4l10.8,31.2c-23.5,5.8-21.3,42.1,3.7,44.4
 c2.7,0.2,4.6,0.1,4.6,0.1c-8.2,38.6,50.3,78.2,50.3,78.2c0.1,0.5,0.1,0.9,0.2,1.3c4,27.9-11.1,55.6-36.7,67.4
 c-25.8,11.9-49.3,28.1-62.3,37.7c-7.8,5.7-14.7,12.6-20,20.7c45,39.5,103.9,63.6,168.4,63.6c64.6,0,123.5-24.1,168.3-63.8
 C417.1,436.2,410.2,429.3,402.4,423.6z"/></svg>`,
      },
      status: { type: String, required: false, index: true },
    },
    personal_info: {
      first_name: { type: String, required: true, index: true },
      middle_name: { type: String, required: true },
      last_name: { type: String, required: true },
      age: { type: Number, min: 22, max: 60 },
      manager: { type: String, required: false },
      mobile: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      city: { type: String, required: true },
      address: { type: String, required: true },
    },
    contract: {
      selectedContractType: { type: Number, min: 0, max: 2 },
      start_date: { type: Date, required: true },
      end_date: { type: Date, required: true },
      salary: { type: String, required: true },
      insurance: { type: String, required: false },
      position: { type: String, required: false },
      department: { type: String, required: false },
    },
    created_date: { type: Date, required: true, default: Date.now },
    modified_date: { type: Date, required: true, default: Date.now },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false;
  }
);

// Declare the Schema of the Mongo model
const EmployeeModel = db.model("Employee", employeeSchema);

EmployeeModel.createIndexes()
  .then(() => console.log("Employee Index Created!"))
  .catch((err) => console.error({ error: err }));

//Export the model
module.exports = EmployeeModel;
