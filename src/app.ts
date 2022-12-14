import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import routerUser from "./routes";
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/users",routerUser);
app.use(errorMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`Server running at localhost:${process.env.PORT}`)
);
