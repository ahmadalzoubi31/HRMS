import express from "express";
const app = express();
import routes from "./routes/index";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(routes);

const PORT: number = 3000;
app.listen(PORT, () => console.log({ message: `Your server is listening to port ${PORT}...` }));
