import pool from "../db.js";
import bcrypt from "bcryptjs";
export const login = async (req, res) => {
  const { email, password } = req.body;
  const hash =  bcrypt.compare(password)

  const consultation = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
    [email,hash],
  );
  if (consultation.rowCount > 0) {
    res.cookie("secretToken", "daksmdkas", {
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    res.sendStatus(200);
  }
  res.sendStatus(400);
};
