import pool from "../db.js";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorized } from "../errorsHandler.js";
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const consultation = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email]
  );

  if (consultation.rowCount === 0)
    throw new NotAuthorized("Email não registrado");
  const hashed = consultation.rows[0].password;
  const comp = await bcrypt.compare(password, hashed);

  if (!comp) throw new NotAuthorized("Senha incorreta");

  const token = jwt.sign({ email }, "secret", {
    expiresIn: "50min",
  });
  res.status(200).json({
    acesstoken: token,
  });
};
