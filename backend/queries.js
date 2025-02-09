import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "expenses",
  password: "password",
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM expenses", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getUserByEmail = (request, response) => {
  const id = request.params.email;
  console.log(id);
  const email = id.trim();

  pool.query(
    "SELECT * FROM expenses WHERE email = $1",
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createUser = (req, res) => {
  const { email, amount, description, category, paymentMethod } = req.body;

  console.log(email, amount, description, category, paymentMethod);

  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  console.log(date);

  pool.query(
    "INSERT INTO expenses (email, amount, date, description, category, method) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [email, amount, date, description, category, paymentMethod],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.rows}`);
    }
  );
};

const updateUser = (request, response) => {
  const { email, amount, description, category, paymentMethod } = request.body;

  pool.query(
    "UPDATE expenses SET amount = $2 description = $3, category = $4, method = $5 WHERE email = $1",
    [email, amount, description, category, paymentMethod],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with Email: ${email}`);
    }
  );
};

const deleteUser = (request, response) => {
  const { email, amount, date, description, category, paymentMethod } =
    request.body;

  pool.query(
    `DELETE FROM expenses 
       WHERE email = $1 AND amount = $2 AND "date" = $3 
       AND description = $4 AND category = $5 AND method = $6`,
    [email, amount, date, description, category, paymentMethod],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with email: ${email}`);
    }
  );
};

export { getUsers, getUserByEmail, createUser, updateUser, deleteUser };
