import express from "express";
import pool from "./db.js";
import { createaccount } from "./controlers/createaccount.js";
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json());

// Rota Principal
app.get("/", (req, res) => {
  res.status(200).send("Rodando");
});

// Rota de criação da conta
app.get("/criarconta", (req, res) => {
  res.status(200).send("criar conta");
});

app.post("/criarconta", createaccount);

// Rota de Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  
    const consultation = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
      [email, password],
    );
    if (consultation.rowCount > 0) res.sendStatus(200)
    res.sendStatus(400)
});
app.get("/login", (req, res) => {
  res.status(200).send("login");
});

// CONFIRM EMAIL
app.get("/confirmemail" , async (req ,res)=>{
    let id = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    const {token} = req.query;
    const decode = jwt.decode(token , 'segredo')
    const { password , email , username } = decode;
    await pool.query("INSERT INTO usuarios (email , password , username , id) VALUES($1,$2,$3,$4)", [email ,password,username,id])


})

export default app;
