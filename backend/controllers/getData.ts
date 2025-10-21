import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { Request, Response } from "express";

export const Getdata = async (req: Request, res: Response) => {
  const { token } = req.query;
  console.log(token);
  const decode = jwt.decode(token, "secret");
  const { username } = decode;
  const consult = await pool.query("SELECT username FROM usuarios");
  console.log(consult.rows);
  const users = consult.rows[0].username;
  res.status(200).json({
    users: users,
    userLoged: username,
  });
};
