import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: "5432",
  database: "chatApp",
});

pool.query("SELECT NOW()", (err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
    console.log("Environment variables loaded:", {});
  }
});

export default pool;
