import pg from "pg";
import bcrypt, { genSalt } from "bcrypt";

const { Pool } = pg;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "auth",
  password: "password",
  port: 5432,
});

const signUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all the fields" });
  }

  const salt = await genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  pool.query(
    "INSERT INTO auth (email,password) VALUES ($1,$2) RETURNING *",
    [email, hashedPassword],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: `User added with email: ${email}` });
    }
  );
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all the fields" });
  }

  pool.query(
    "SELECT * FROM auth WHERE email = $1",
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length === 0) {
        return res
          .status(400)
          .json({ message: "Email doesnt exist", exists: false });
      }
      const { password: hashedPassword } = results.rows[0];
      bcrypt.compare(password, hashedPassword, (err, res) => {
        if (err) {
          return res.status(500).json({ message: err });
        }
        if (res) {
          return res
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
};

export { signUp, signIn };
