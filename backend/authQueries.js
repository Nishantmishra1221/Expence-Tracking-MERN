import pg from "pg";
import bcrypt, { genSalt } from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { setUser, getUser } from "./utils/userLoginMap.js";
const { Pool } = pg;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "auth",
  password: "password",
  port: 5432,
});

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all the fields" });
    }

    const check = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (check.rows[0]) {
      return res
        .status(400)
        .json({ message: "Email already exists", exists: true });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );

    const sessionId = uuidv4();
    setUser(email, sessionId);
    return res
      .cookie("sessionId", sessionId, { httpOnly: true, secure: true })
      .status(201)
      .json({ message: `User Signed Up with email: ${email}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all the fields" });
    }

    pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows.length === 0) {
          return res
            .status(400)
            .json({ message: "Email doesn't exist", exists: false });
        }

        const { password: hashedPassword } = results.rows[0];
        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ message: err });
          }
          if (isMatch) {
            const sessionId = uuidv4();
            setUser(email, sessionId);
            return res
              .cookie("sessionId", sessionId, {
                path: "/",
                secure: false,
                httpOnly: true,
                sameSite: "Lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
              })
              .status(200)
              .json({
                message: `User signed in with email: ${email}`,
                exists: true,
              });
          } else {
            return res.status(401).json({ message: "Invalid password" });
          }
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { signUp, signIn };
