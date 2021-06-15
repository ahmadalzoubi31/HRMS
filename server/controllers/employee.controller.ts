import Employee from "../models/Employee";

// retrieve all employees
const getAll = (req: any, res: any) => {
  Employee.findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      // logging and web
      res.status(500).send({ message: err.message || "Some error occurred while retrieving employee." });
      console.log({ message: err.message || "Some error occurred while retrieving employee." });
    });
};
const getOne = (req: any, res: any) => {
  let employeeID = req.params.id;
  Employee.findOne(employeeID)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      // logging and web
      res.status(500).send({ message: err.message || "Some error occurred while retrieving employee." });
      console.log({ message: err.message || "Some error occurred while retrieving employee." });
    });
};
const createOne = (req: any, res: any) => {
  // Validate the content
  if (!req.body) {
    console.log({ message: "Content can not be empty!" });
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  console.log({ "request body": req.body });
  const employee = new Employee(req.body);

  employee
    .create()
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      // logging and web
      res.status(500).send({ message: err.message || "Some error occurred while creating a employee." });
      console.log({ message: err.message || "Some error occurred while creating a employee." });
    });
};

// const updateOne = (req, res) => {
//   let employeeID = req.params.id;

//   // Validate the content
//   if (!req.body) {
//     console.log({ message: "Content can not be empty!" });
//     res.status(400).send({ message: "Content can not be empty!" });
//     res.end();
//     return;
//   }

//   let updateEmployee = new Employee(req.body);

//   update(employeeID, updateEmployee, (err, data) => {
//     if (err) {
//       console.log({
//         message: err.message || "Some error occurred while updating employee.",
//       });
//       res.status(500).send({
//         message: err.message || "Some error occurred while updating employee.",
//       });
//       return;
//     }

//     console.log("updated employee: ", data);
//     res.send(data);
//     res.end();
//   });
// };
// const deleteOne = (req, res) => {
//   let employeeID = req.params.id;
//   delete (employeeID,
//   (err, data) => {
//     if (err) {
//       console.log({
//         message: err.message || "Some error occurred while deleting employee by id.",
//       });
//       res.status(500).send({
//         message: err.message || "Some error occurred while deleting employee by id.",
//       });
//       res.end();
//       return;
//     }

//     console.log(data);
//     res.send(data);
//     res.end();
//   });
// };

export default {
  getAll,
  getOne,
  createOne,
  // updateOne,
  // deleteOne,
};
// (err, docs) => {
//   if (err) {
//     // Logging and Web
//     console.log({ message: err.message || "Some error occurred while retrieving employees." });
//     res.status(500).send({ message: err.message || "Some error occurred while retrieving employees." });
//     return;
//   }

//   if (docs.length === 0) {
//     // Logging and Web
//     console.log({ message: `No employee found` });
//     res.status(200).send({ message: "No employee found." });
//     return;
//   }

//   res.status(200).send(docs);
//   console.log(docs);
// };
