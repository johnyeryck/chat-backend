import jwt from "jsonwebtoken";
import { transport } from "../nodemailerConfig/emailconfig.js";
import pool from "../db.js";
import bcrypt from "bcryptjs";
import { emaildata } from "../nodemailerConfig/emailTransporter.js";
import { Getusername } from "../functions/createUsername.js";
import type { Request, Response } from "express";
import ErrorHandler, { BadRequest } from "../errorsHandler.js";

// MIDDLEWARE OF ACCOUNT CREATION
export const createaccount = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = Getusername(email);

  const consultation = await pool.query(
    "SELECT email FROM usuarios WHERE email = $1",
    [email]
  );

  if (consultation.rowsCount > 0)
    throw new BadRequest("Email já foi cadastrado");

  const hash = await bcrypt.hash(password, 10);
  const token = jwt.sign({ email, hash, user }, "segredo", {
    expiresIn: "5min",
  });
  const url = `http://localhost:3000/confirmEmail/${token}`;

  await transport.sendMail(emaildata(email, url), (error: any, info: any) => {
    if (error) return res.status(500).send(error);
    return res.sendStatus(200);
  });
};
