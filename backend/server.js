import express from "express";
import bodyParser from "body-parser";
import {
  getUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from "./queries.js";
import { signUp, signIn } from "./authQueries.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/expenses", getUsers);
app.get("/expenses/:email", getUserByEmail);
app.post("/expenses", createUser);
app.put("/expenses/:email", updateUser);
app.delete("/expenses/", deleteUser);

app.post("/signup", signUp);
app.post("/signin", signIn);

app.listen(5002, () => {
  console.log("Server started on port 5002");
});
