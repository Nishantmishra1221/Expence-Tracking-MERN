import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { getUser, setUser } from "./utils/userLoginMap.js";
import {
  getUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from "./queries.js";
import { signUp, signIn } from "./authQueries.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/expenses", getUsers);
app.get("/expenses/:email", getUserByEmail);
app.post("/expenses", createUser);
app.put("/expenses/:email", updateUser);
app.delete("/expenses/", deleteUser);

app.post("/signup", signUp);
app.get("/signin", signIn);

app.get("/get-cookie", (req, res) => {
  const sessionId = req.cookies.sessionId;
  const email = getUser(sessionId);
  res.json({ sessionId, email });
});

app.get("/logout", (req, res) => {
  res.clearCookie("sessionId", {
    path: "/",
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  });
  res.status(200).json({ message: "Logged out successfully" });
});
app.listen(5002, () => {
  console.log("Server started on port 5002");
});
