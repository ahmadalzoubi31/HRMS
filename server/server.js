const express = require("express");
const app = express();
const routes = require("./routes/index");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

const PORT = 3000;
app.listen(PORT, "localhost", null,(err) => {
  if (err) {
    console.log({ message: "There is an error." });
    return;
  }

  app.use(routes);
  console.log(`Your server is listening to port ${PORT}...`);
});
