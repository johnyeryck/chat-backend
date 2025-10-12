import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { Request, Response } from "express";

export const ConfirmEmail = async (req: Request, res: Response) => {
  let id = BigInt(Math.random() * Number.MAX_SAFE_INTEGER);
  const { token } = req.query;
  console.log(token);
  const decode = jwt.decode(token, "segredo");
  const { hash, email, user } = decode;
  console.log(user);
  try {
    const response = await pool.query(
      "INSERT INTO usuarios (email , password , id,username) VALUES($1,$2,$3,$4)",
      [email, hash, id, user],
    );
    console.log(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};
