import pool from "../db.js";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const consultation = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email],
  );

  if (consultation.rowCount === 0) {
    res.status(401).send("Email Inválido");
  }
  const hashed = consultation.rows[0].password;
  const comp = await bcrypt.compare(password, hashed);
  console.log(comp);
  if (comp) {
    res.sendStatus(200);
  }
  res.sendStatus(400);
};
