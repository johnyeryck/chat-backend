import jwt from "jsonwebtoken";
import { transport } from "../emailconfig.js";
import pool from "../db.js";
import bcrypt from "bcryptjs";

// MIDDLEWARE OF ACCOUNT CREATION
export const createaccount = async (req, res) => {
  const { email, password, username } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const consultation = await pool.query(
      "SELECT email FROM usuarios WHERE email = $1",
      [email],
    );
    if (consultation.rowCount === 0) {
      const token = jwt.sign({ email, hash }, "segredo", {
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
      return res.status(400).send("Email já cadastrado");
    }
  } catch {
    res.sendStatus(500);
  }
};
