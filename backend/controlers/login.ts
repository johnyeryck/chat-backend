import pool from "../db.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
export const login = async (req, res) => {
  const { email, password } = req.body;
  const consultation = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email],
  );

  if(consultation.rowCount === 0){
      res.status(401).send("Email Inválido")
  }
  const hashed = consultation.rows[0].password
  const comp = bcrypt.compare(password,hashed)
  if (comp) {
    // const token = jwt.sign("secret")
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
