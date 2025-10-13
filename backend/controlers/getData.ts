import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { Request, Response } from "express";

export const Getdata = async (req: Request, res: Response) => {
  const { token } = req.params;
  const decode = jwt.decode(token, "secret");
  const { email } = decode;
  const consult = await pool.query(
    "SELECT username FROM usuarios WHERE email = $1",
    [email]
  );
  const username = consult.rows[0].username;
  res.json({
    user: username,
  });
};
