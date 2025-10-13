import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { Request, Response } from "express";
import errosHandle from "../errorsHandler.js";

export const ConfirmEmail = async (req: Request, res: Response) => {
  let id = BigInt(Math.random() * Number.MAX_SAFE_INTEGER);
  const { token } = req.query;
  const decode = jwt.decode(token, "segredo");
  const { hash, email, user } = decode;
  console.log();

  const response = await pool.query(
    "INSERT INTO usuarios (email , password , id,username) VALUES($1,$2,$3,$4)",
    [email, hash, id, user]
  );
};
