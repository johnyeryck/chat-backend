import nodemailer from "nodemailer";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { transport } from "../emailconfig.js";
import pool from "../db.js";




// MIDDLEWARE OF ACCOUNT CREATION
export const createaccount = async (req, res) => {
  const { email, password, username } = req.body;

  const consultation = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email],
  );

  if (consultation.rowCount === 0) {
    const token = jwt.sign({ email, password, username }, "segredo", {
      expiresIn: "5min",
    });
    const url = `http://localhost:4000/confirmemail?token=${token}`;

    const emaildata = {
      from: "johnyeryckdev@gmail.com",
      to: email,
      subject: "Confirme seu email",
      html: `<div style="background-color: black; height : 360px">
                 <h1 style="color: white">Para continuar a criação de sua conta Clique no link para confirmar seu e-mail: </h1>
                 <button style="background-color: blueviolet;"><a href="${url}" style="text-decoration : none; color : white">Confirmar</a></button>
                 </div>`,
    };

    transport.sendMail(emaildata, (error, info) => {
      if (error) return res.status(500).send(error);
      return res.sendStatus(200);
    });
  } else {
    return res.sendStatus(400);
  }
};




