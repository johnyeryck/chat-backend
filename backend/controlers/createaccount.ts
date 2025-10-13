import jwt from "jsonwebtoken";
import { transport } from "../nodemailerConfig/emailconfig.js";
import pool from "../db.js";
import bcrypt from "bcryptjs";
import { emaildata } from "../nodemailerConfig/emailTransporter.js";
import { Getusername } from "../functions/createUsername.js";
import type { Request, Response } from "express";

// MIDDLEWARE OF ACCOUNT CREATION
export const createaccount = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = Getusername(email);
  console.log(user);
  const hash = await bcrypt.hash(password, 10);
  try {
    const consultation = await pool.query(
      "SELECT email FROM usuarios WHERE email = $1",
      [email]
    );
    if (consultation.rowCount === 0) {
      const token = jwt.sign({ email, hash, user }, "segredo", {
        expiresIn: "5min",
      });
      const url = `http://localhost:3000/confirmEmail/${token}`;

      transport.sendMail(emaildata(email, url), (error: any, info: any) => {
        if (error) return res.status(500).send(error);
        return res.sendStatus(200);
      });
    } else {
      return res.status(400).send("Email já cadastrado");
    }
  } catch {
    res.sendStatus(500);
  }
};
