import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { Request, Response } from "express";
import errosHandle from "../errorsHandler.js";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.TOKEN_ACESS);

export const ConfirmEmail = async (req: Request, res: Response) => {
  const { token } = req.query;
  const decode = jwt.decode(token, "segredo");

  if (!decode) throw new errosHandle("Token não autorizado", 401);
  const { hash, email, user } = decode;
  const response = await pool.query(
    "INSERT INTO usuarios (email , password ,username) VALUES($1,$2,$3)",
    [email, hash, user]
  );
  console.log(response);
  return res.sendStatus(201);
};
