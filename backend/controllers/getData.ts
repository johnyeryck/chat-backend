import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { Request, Response } from "express";

export const Getdata = async (req: Request, res: Response) => {
  const { token } = req.query;
  console.log(token);
  const decode = jwt.decode(token, "secret");
  const { username } = decode;
  const consult = await pool.query("SELECT username FROM usuarios");
  const users: { username: string } = consult.rows;

  const data = {
    userLoged: username,
    users: users,
  };

  res.status(200).json(data);
};
